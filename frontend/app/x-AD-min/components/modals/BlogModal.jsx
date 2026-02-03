"use client";
import React, { useState, useEffect } from "react";
import { X, Plus, Trash2, Loader2, Upload } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5002/api";

const CATEGORIES = ["Clothes", "Shoes", "Bags"];

const SuperSimpleBlogModal = ({
  currentItem,
  closeModal,
  loading,
  setLoading,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    category: [], // Array for multiple categories
    tags: [],
    featuredImage: "",
    featuredVideo: "",
    contentBlocks: [],
    published: false,
  });

  const [uploadingFile, setUploadingFile] = useState(false);

  // Load blog data when editing
  useEffect(() => {
    if (currentItem) {
      setFormData({
        title: currentItem.title || "",
        category: currentItem.category || [],
        tags: currentItem.tags || [],
        featuredImage: currentItem.featuredImage || "",
        featuredVideo: currentItem.featuredVideo?.url || "",
        contentBlocks: currentItem.contentBlocks || [],
        published: currentItem.published || false,
      });
    }
  }, [currentItem]);

  // ============================================
  // FILE UPLOAD (Images & Videos)
  // ============================================

  const handleFileUpload = async (file, fieldType, blockIndex = null) => {
    if (!file) return;

    setUploadingFile(true);
    const formDataUpload = new FormData();
    formDataUpload.append("file", file);

    try {
      // ✅ FIXED: Proper error handling for upload
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formDataUpload,
      });

      // ✅ Check if response is OK before parsing JSON
      if (!res.ok) {
        const errorText = await res.text();
        console.error("Upload failed - Server response:", errorText);
        throw new Error(`Upload failed: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();

      if (!data.url) {
        throw new Error("No URL returned from upload");
      }

      // Update state with uploaded URL
      if (blockIndex !== null) {
        // Uploading to a content block
        const updated = [...formData.contentBlocks];
        if (fieldType === "image") {
          updated[blockIndex].image.url = data.url;
        } else if (fieldType === "video") {
          updated[blockIndex].video.url = data.url;
        }
        setFormData({ ...formData, contentBlocks: updated });
      } else {
        // Uploading to featured media
        setFormData({ ...formData, [fieldType]: data.url });
      }

      console.log("✅ Upload successful:", data.url);
    } catch (error) {
      console.error("❌ Upload error:", error);
      alert(`Upload failed: ${error.message}`);
    } finally {
      setUploadingFile(false);
    }
  };

  // ============================================
  // CONTENT BLOCKS
  // ============================================

  const addContentBlock = (type) => {
    const newBlock = {
      type,
      order: formData.contentBlocks.length,
      text: "",
      image: { url: "", caption: "" },
      video: { url: "", caption: "" },
    };

    setFormData({
      ...formData,
      contentBlocks: [...formData.contentBlocks, newBlock],
    });
  };

  const updateContentBlock = (index, field, value) => {
    const updated = [...formData.contentBlocks];

    if (field.includes(".")) {
      const [parent, child] = field.split(".");
      updated[index][parent][child] = value;
    } else {
      updated[index][field] = value;
    }

    setFormData({ ...formData, contentBlocks: updated });
  };

  const removeContentBlock = (index) => {
    const updated = formData.contentBlocks
      .filter((_, i) => i !== index)
      .map((block, i) => ({ ...block, order: i }));

    setFormData({ ...formData, contentBlocks: updated });
  };

  // ============================================
  // CATEGORY TOGGLE (Checkbox)
  // ============================================

  const toggleCategory = (cat) => {
    setFormData((prev) => {
      const exists = prev.category.includes(cat);
      return {
        ...prev,
        category: exists
          ? prev.category.filter((c) => c !== cat)
          : [...prev.category, cat],
      };
    });
  };

  // ============================================
  // FORM SUBMISSION
  // ============================================

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!formData.title.trim()) {
        alert("Please enter a title");
        setLoading(false);
        return;
      }

      if (formData.category.length === 0) {
        alert("Please select at least one category");
        setLoading(false);
        return;
      }

      // Auto-generate slug
      const slug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

      const blogData = {
        ...formData,
        slug,
        featuredVideo: formData.featuredVideo
          ? { url: formData.featuredVideo, platform: "direct" }
          : null,
        contentBlocks: formData.contentBlocks.map((block, index) => ({
          ...block,
          order: index,
        })),
      };

      const token = localStorage.getItem("token");
      const method = currentItem ? "PUT" : "POST";
      const url = currentItem
        ? `${API_URL}/blogs/${currentItem._id}`
        : `${API_URL}/blogs`;

      console.log("📤 Sending blog data:", blogData);

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(blogData),
      });

      const result = await response.json();
      console.log("📥 Server response:", result);

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to save blog");
      }

      // ✅ FIXED: Correct alert syntax with parentheses
      alert(`Blog ${currentItem ? "updated" : "created"} successfully!`);
      closeModal();
      window.location.reload();
    } catch (error) {
      console.error("Error saving blog:", error);
      alert(error.message || "Failed to save blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">
            {currentItem ? "Edit Blog" : "Create Blog"}
          </h2>
          <button
            onClick={closeModal}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Enter blog title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Categories - CHECKBOXES */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Categories <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4">
              {CATEGORIES.map((cat) => (
                <label
                  key={cat}
                  className="flex items-center gap-2 cursor-pointer px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  <input
                    type="checkbox"
                    checked={formData.category.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  <span className="text-sm font-medium">{cat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Status */}
          <div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.published}
                onChange={(e) =>
                  setFormData({ ...formData, published: e.target.checked })
                }
                className="w-4 h-4 text-blue-600 rounded"
              />
              <span className="text-sm font-medium">Publish Blog</span>
            </label>
          </div>

          {/* Featured Image */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Featured Image
            </label>
            {formData.featuredImage && (
              <div className="relative mb-2">
                <img
                  src={formData.featuredImage}
                  alt="Featured"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, featuredImage: "" })
                  }
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                e.target.files[0] &&
                handleFileUpload(e.target.files[0], "featuredImage")
              }
              className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              disabled={uploadingFile}
            />
          </div>

          {/* Featured Video */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Featured Video (optional)
            </label>
            {formData.featuredVideo && (
              <div className="relative mb-2">
                <video
                  src={formData.featuredVideo}
                  controls
                  className="w-full h-40 rounded-lg"
                />
                <button
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, featuredVideo: "" })
                  }
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
            <input
              type="file"
              accept="video/*"
              onChange={(e) =>
                e.target.files[0] &&
                handleFileUpload(e.target.files[0], "featuredVideo")
              }
              className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
              disabled={uploadingFile}
            />
            <p className="text-xs text-gray-500 mt-1">
              Upload video file (MP4, MOV, etc.)
            </p>
          </div>

          {/* Content Blocks */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-medium">Content</label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => addContentBlock("text")}
                  className="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  + Text
                </button>
                <button
                  type="button"
                  onClick={() => addContentBlock("image")}
                  className="px-3 py-1 text-xs bg-green-600 text-white rounded hover:bg-green-700"
                >
                  + Image
                </button>
                <button
                  type="button"
                  onClick={() => addContentBlock("video")}
                  className="px-3 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700"
                >
                  + Video
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {formData.contentBlocks.map((block, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-3 bg-gray-50 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase text-gray-600">
                      {block.type} Block
                    </span>
                    <button
                      type="button"
                      onClick={() => removeContentBlock(index)}
                      className="text-red-600 hover:bg-red-50 p-1 rounded"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {block.type === "text" && (
                    <textarea
                      placeholder="Enter text..."
                      value={block.text}
                      onChange={(e) =>
                        updateContentBlock(index, "text", e.target.value)
                      }
                      rows="3"
                      className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500"
                    />
                  )}

                  {block.type === "image" && (
                    <>
                      {block.image.url && (
                        <img
                          src={block.image.url}
                          alt="Preview"
                          className="w-full h-32 object-cover rounded"
                        />
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          e.target.files[0] &&
                          handleFileUpload(e.target.files[0], "image", index)
                        }
                        className="w-full text-xs file:mr-4 file:py-2 file:px-3 file:rounded file:border-0 file:bg-green-50 file:text-green-700"
                        disabled={uploadingFile}
                      />
                      <input
                        type="text"
                        placeholder="Caption (optional)"
                        value={block.image.caption}
                        onChange={(e) =>
                          updateContentBlock(
                            index,
                            "image.caption",
                            e.target.value
                          )
                        }
                        className="w-full px-3 py-2 border rounded text-sm"
                      />
                    </>
                  )}

                  {block.type === "video" && (
                    <>
                      {block.video.url && (
                        <video
                          src={block.video.url}
                          controls
                          className="w-full h-32 rounded"
                        />
                      )}
                      <input
                        type="file"
                        accept="video/*"
                        onChange={(e) =>
                          e.target.files[0] &&
                          handleFileUpload(e.target.files[0], "video", index)
                        }
                        className="w-full text-xs file:mr-4 file:py-2 file:px-3 file:rounded file:border-0 file:bg-red-50 file:text-red-700"
                        disabled={uploadingFile}
                      />
                      <input
                        type="text"
                        placeholder="Caption (optional)"
                        value={block.video.caption}
                        onChange={(e) =>
                          updateContentBlock(
                            index,
                            "video.caption",
                            e.target.value
                          )
                        }
                        className="w-full px-3 py-2 border rounded text-sm"
                      />
                    </>
                  )}
                </div>
              ))}

              {formData.contentBlocks.length === 0 && (
                <div className="text-center py-6 border-2 border-dashed rounded-lg">
                  <p className="text-sm text-gray-500">
                    No content yet. Click buttons above to add.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Tags (optional)
            </label>
            <input
              type="text"
              placeholder="summer, fashion, trending"
              value={formData.tags.join(", ")}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  tags: e.target.value
                    .split(",")
                    .map((t) => t.trim())
                    .filter(Boolean),
                })
              }
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading || uploadingFile}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Saving...
              </>
            ) : uploadingFile ? (
              <>
                <Upload className="w-5 h-5 animate-pulse" />
                Uploading...
              </>
            ) : (
              <>{currentItem ? "Update Blog" : "Create Blog"}</>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SuperSimpleBlogModal;
