// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   X,
//   Plus,
//   Trash2,
//   ChevronUp,
//   ChevronDown,
//   Video,
//   Image as ImageIcon,
//   Type,
//   Heading,
//   Upload,
//   Loader2,
// } from "lucide-react";

// const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5002/api";

// const CONTENT_BLOCK_TYPES = {
//   HEADING: "heading",
//   TEXT: "text",
//   IMAGE: "image",
//   VIDEO: "video",
// };

// const VIDEO_PLATFORMS = {
//   YOUTUBE: "youtube",
//   VIMEO: "vimeo",
//   DIRECT: "direct",
//   OTHER: "other",
// };

// const CATEGORIES = [
//   "tutorial",
//   "news",
//   "announcement",
//   "product",
//   "lifestyle",
//   "technology",
//   "fashion",
//   "business",
//   "other",
// ];

// const EnhancedBlogModal = ({
//   currentItem,
//   closeModal,
//   loading,
//   setLoading,
// }) => {
//   const [formData, setFormData] = useState({
//     title: "",
//     slug: "",
//     excerpt: "",
//     featuredImage: "",
//     featuredVideo: {
//       url: "",
//       thumbnailUrl: "",
//       platform: "youtube",
//     },
//     contentBlocks: [],
//     content: "", // Legacy field
//     tags: [],
//     category: "other",
//     published: false,
//     metaTitle: "",
//     metaDescription: "",
//   });

//   const [uploadingImage, setUploadingImage] = useState(false);

//   // Load blog data when editing
//   useEffect(() => {
//     if (currentItem) {
//       setFormData({
//         ...currentItem,
//         contentBlocks: currentItem.contentBlocks || [],
//         tags: currentItem.tags || [],
//         featuredVideo: currentItem.featuredVideo || {
//           url: "",
//           thumbnailUrl: "",
//           platform: "youtube",
//         },
//       });
//     }
//   }, [currentItem]);

//   const resetForm = () => {
//     setFormData({
//       title: "",
//       slug: "",
//       excerpt: "",
//       featuredImage: "",
//       featuredVideo: {
//         url: "",
//         thumbnailUrl: "",
//         platform: "youtube",
//       },
//       contentBlocks: [],
//       content: "",
//       tags: [],
//       category: "other",
//       published: false,
//       metaTitle: "",
//       metaDescription: "",
//     });
//   };

//   // ============================================
//   // CONTENT BLOCK MANAGEMENT
//   // ============================================

//   const addContentBlock = (type) => {
//     const newBlock = {
//       type,
//       order: formData.contentBlocks.length,
//       heading: "",
//       text: "",
//       image: { url: "", caption: "", alt: "" },
//       video: {
//         url: "",
//         thumbnailUrl: "",
//         caption: "",
//         duration: "",
//         platform: "youtube",
//       },
//     };

//     setFormData({
//       ...formData,
//       contentBlocks: [...formData.contentBlocks, newBlock],
//     });
//   };

//   const updateContentBlock = (index, field, value) => {
//     const updated = [...formData.contentBlocks];

//     // Handle nested fields (image.url, video.caption, etc.)
//     if (field.includes(".")) {
//       const [parent, child] = field.split(".");
//       updated[index][parent][child] = value;
//     } else {
//       updated[index][field] = value;
//     }

//     setFormData({ ...formData, contentBlocks: updated });
//   };

//   const removeContentBlock = (index) => {
//     const updated = formData.contentBlocks
//       .filter((_, i) => i !== index)
//       .map((block, i) => ({ ...block, order: i }));

//     setFormData({ ...formData, contentBlocks: updated });
//   };

//   const moveContentBlock = (index, direction) => {
//     const newIndex = direction === "up" ? index - 1 : index + 1;
//     if (newIndex < 0 || newIndex >= formData.contentBlocks.length) return;

//     const updated = [...formData.contentBlocks];
//     [updated[index], updated[newIndex]] = [updated[newIndex], updated[index]];

//     // Update order numbers
//     updated.forEach((block, i) => (block.order = i));

//     setFormData({ ...formData, contentBlocks: updated });
//   };

//   // ============================================
//   // IMAGE/VIDEO UPLOAD
//   // ============================================

//   const handleFileUpload = async (file, field, blockIndex = null) => {
//     if (!file) return;

//     setUploadingImage(true);
//     const formDataUpload = new FormData();
//     formDataUpload.append("file", file);

//     try {
//       const res = await fetch("/api/upload", {
//         method: "POST",
//         body: formDataUpload,
//       });

//       const data = await res.json();

//       if (data.url) {
//         if (blockIndex !== null) {
//           // Uploading to a content block
//           updateContentBlock(blockIndex, field, data.url);
//         } else {
//           // Uploading to main featured image/video
//           if (field.includes(".")) {
//             const [parent, child] = field.split(".");
//             setFormData({
//               ...formData,
//               [parent]: { ...formData[parent], [child]: data.url },
//             });
//           } else {
//             setFormData({ ...formData, [field]: data.url });
//           }
//         }
//       }
//     } catch (error) {
//       console.error("Upload failed:", error);
//       alert("Failed to upload file. Please try again.");
//     } finally {
//       setUploadingImage(false);
//     }
//   };

//   // ============================================
//   // FORM SUBMISSION
//   // ============================================

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // Validation
//       if (!formData.title.trim()) {
//         alert("Please enter a blog title");
//         setLoading(false);
//         return;
//       }

//       // Auto-generate slug if empty
//       const slug =
//         formData.slug ||
//         formData.title
//           .toLowerCase()
//           .replace(/[^a-z0-9]+/g, "-")
//           .replace(/^-+|-+$/g, "");

//       const blogData = {
//         ...formData,
//         slug,
//         contentBlocks: formData.contentBlocks.map((block, index) => ({
//           ...block,
//           order: index,
//         })),
//       };

//       const token = localStorage.getItem("token");
//       const method = currentItem ? "PUT" : "POST";
//       const url = currentItem
//         ? `${API_URL}/blogs/${currentItem._id}`
//         : `${API_URL}/blogs`;

//       const response = await fetch(url, {
//         method,
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(blogData),
//       });

//       const result = await response.json();

//       if (!response.ok || !result.success) {
//         throw new Error(result.message || "Failed to save blog");
//       }

//       alert(`Blog ${currentItem ? "updated" : "created"} successfully!`);
//       closeModal();
//       window.location.reload(); // Refresh to show changes
//     } catch (error) {
//       console.error("Error saving blog:", error);
//       alert(error.message || "Failed to save blog. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Helper function to extract YouTube video ID
//   const getYouTubeVideoId = (url) => {
//     const regExp =
//       /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
//     const match = url.match(regExp);
//     return match && match[2].length === 11 ? match[2] : null;
//   };

//   // ============================================
//   // RENDER CONTENT BLOCK
//   // ============================================

//   const renderContentBlock = (block, index) => {
//     return (
//       <div
//         key={index}
//         className="bg-gray-50 border border-gray-200 rounded-lg p-3 sm:p-4 space-y-3"
//       >
//         {/* Block Header */}
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             {block.type === "heading" && (
//               <Heading className="w-4 h-4 text-purple-600" />
//             )}
//             {block.type === "text" && (
//               <Type className="w-4 h-4 text-blue-600" />
//             )}
//             {block.type === "image" && (
//               <ImageIcon className="w-4 h-4 text-green-600" />
//             )}
//             {block.type === "video" && (
//               <Video className="w-4 h-4 text-red-600" />
//             )}

//             <span className="text-xs sm:text-sm font-semibold text-gray-700 capitalize">
//               {block.type} Block #{index + 1}
//             </span>
//           </div>

//           <div className="flex items-center gap-1">
//             <button
//               type="button"
//               onClick={() => moveContentBlock(index, "up")}
//               disabled={index === 0}
//               className="p-1 hover:bg-gray-200 rounded disabled:opacity-30 transition-colors"
//               title="Move up"
//             >
//               <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4" />
//             </button>
//             <button
//               type="button"
//               onClick={() => moveContentBlock(index, "down")}
//               disabled={index === formData.contentBlocks.length - 1}
//               className="p-1 hover:bg-gray-200 rounded disabled:opacity-30 transition-colors"
//               title="Move down"
//             >
//               <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
//             </button>
//             <button
//               type="button"
//               onClick={() => removeContentBlock(index)}
//               className="p-1 hover:bg-red-100 text-red-600 rounded transition-colors"
//               title="Remove block"
//             >
//               <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
//             </button>
//           </div>
//         </div>

//         {/* Block Content */}
//         {block.type === "heading" && (
//           <input
//             type="text"
//             placeholder="Enter heading text..."
//             value={block.heading}
//             onChange={(e) =>
//               updateContentBlock(index, "heading", e.target.value)
//             }
//             className="w-full px-3 py-2 border rounded-lg text-base sm:text-lg font-semibold focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           />
//         )}

//         {block.type === "text" && (
//           <>
//             <input
//               type="text"
//               placeholder="Optional heading"
//               value={block.heading}
//               onChange={(e) =>
//                 updateContentBlock(index, "heading", e.target.value)
//               }
//               className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//             <textarea
//               placeholder="Enter text content..."
//               value={block.text}
//               onChange={(e) =>
//                 updateContentBlock(index, "text", e.target.value)
//               }
//               rows="4"
//               className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
//             />
//           </>
//         )}

//         {block.type === "image" && (
//           <>
//             {block.image.url && (
//               <div className="relative">
//                 <img
//                   src={block.image.url}
//                   alt={block.image.alt || "Preview"}
//                   className="w-full h-32 sm:h-48 object-cover rounded-lg"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => updateContentBlock(index, "image.url", "")}
//                   className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
//                 >
//                   <X className="w-3 h-3 sm:w-4 sm:h-4" />
//                 </button>
//               </div>
//             )}

//             <label className="block">
//               <span className="text-xs sm:text-sm text-gray-600">
//                 Upload Image
//               </span>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) =>
//                   e.target.files[0] &&
//                   handleFileUpload(e.target.files[0], "image.url", index)
//                 }
//                 className="block w-full mt-1 text-xs sm:text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//                 disabled={uploadingImage}
//               />
//             </label>

//             <input
//               type="text"
//               placeholder="Image URL (or upload above)"
//               value={block.image.url}
//               onChange={(e) =>
//                 updateContentBlock(index, "image.url", e.target.value)
//               }
//               className="w-full px-3 py-2 border rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />

//             <input
//               type="text"
//               placeholder="Image caption (optional)"
//               value={block.image.caption}
//               onChange={(e) =>
//                 updateContentBlock(index, "image.caption", e.target.value)
//               }
//               className="w-full px-3 py-2 border rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />

//             <input
//               type="text"
//               placeholder="Alt text for SEO"
//               value={block.image.alt}
//               onChange={(e) =>
//                 updateContentBlock(index, "image.alt", e.target.value)
//               }
//               className="w-full px-3 py-2 border rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//           </>
//         )}

//         {block.type === "video" && (
//           <>
//             <select
//               value={block.video.platform}
//               onChange={(e) =>
//                 updateContentBlock(index, "video.platform", e.target.value)
//               }
//               className="w-full px-3 py-2 border rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             >
//               <option value="youtube">YouTube</option>
//               <option value="vimeo">Vimeo</option>
//               <option value="direct">Direct Link</option>
//               <option value="other">Other</option>
//             </select>

//             <input
//               type="text"
//               placeholder="Video URL (e.g., YouTube link or direct MP4 link)"
//               value={block.video.url}
//               onChange={(e) =>
//                 updateContentBlock(index, "video.url", e.target.value)
//               }
//               className="w-full px-3 py-2 border rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />

//             <input
//               type="text"
//               placeholder="Thumbnail URL (optional)"
//               value={block.video.thumbnailUrl}
//               onChange={(e) =>
//                 updateContentBlock(index, "video.thumbnailUrl", e.target.value)
//               }
//               className="w-full px-3 py-2 border rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />

//             <input
//               type="text"
//               placeholder="Video caption (optional)"
//               value={block.video.caption}
//               onChange={(e) =>
//                 updateContentBlock(index, "video.caption", e.target.value)
//               }
//               className="w-full px-3 py-2 border rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />

//             <input
//               type="text"
//               placeholder="Duration (e.g., 5:30)"
//               value={block.video.duration}
//               onChange={(e) =>
//                 updateContentBlock(index, "video.duration", e.target.value)
//               }
//               className="w-full px-3 py-2 border rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />

//             {block.video.url && (
//               <div className="bg-white p-2 rounded border">
//                 <p className="text-xs text-gray-500 mb-1">Preview:</p>
//                 {block.video.platform === "youtube" &&
//                   block.video.url.includes("youtube.com") && (
//                     <iframe
//                       className="w-full h-32 sm:h-48 rounded"
//                       src={`https://www.youtube.com/embed/${getYouTubeVideoId(
//                         block.video.url
//                       )}`}
//                       frameBorder="0"
//                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                       allowFullScreen
//                     />
//                   )}
//                 {block.video.platform === "direct" && (
//                   <video
//                     src={block.video.url}
//                     controls
//                     className="w-full h-32 sm:h-48 rounded"
//                   />
//                 )}
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto my-4">
//         {/* Header */}
//         <div className="sticky top-0 bg-white border-b border-gray-200 p-4 sm:p-6 flex items-center justify-between z-10 rounded-t-2xl">
//           <div>
//             <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
//               {currentItem ? "Edit Blog Post" : "Create New Blog Post"}
//             </h2>
//             <p className="text-xs sm:text-sm text-gray-500 mt-1">
//               Add videos, images, and rich content sections
//             </p>
//           </div>
//           <button
//             onClick={closeModal}
//             className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//           >
//             <X className="w-5 h-5 sm:w-6 sm:h-6" />
//           </button>
//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="p-4 sm:p-6 space-y-4 sm:space-y-6"
//         >
//           {/* Basic Information */}
//           <div className="space-y-4">
//             <h3 className="text-base sm:text-lg font-semibold text-gray-800">
//               Basic Information
//             </h3>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div className="sm:col-span-2">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Title *
//                 </label>
//                 <input
//                   type="text"
//                   required
//                   placeholder="Enter blog title"
//                   value={formData.title}
//                   onChange={(e) =>
//                     setFormData({ ...formData, title: e.target.value })
//                   }
//                   className="w-full px-3 py-2 border rounded-lg text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>

//               <div className="sm:col-span-2">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Slug (URL-friendly)
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="auto-generated-from-title"
//                   value={formData.slug}
//                   onChange={(e) =>
//                     setFormData({ ...formData, slug: e.target.value })
//                   }
//                   className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//                 <p className="text-xs text-gray-500 mt-1">
//                   Leave empty to auto-generate from title
//                 </p>
//               </div>

//               <div className="sm:col-span-2">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Excerpt
//                 </label>
//                 <textarea
//                   placeholder="Short summary (max 300 characters)"
//                   maxLength={300}
//                   value={formData.excerpt}
//                   onChange={(e) =>
//                     setFormData({ ...formData, excerpt: e.target.value })
//                   }
//                   rows="2"
//                   className="w-full px-3 py-2 border rounded-lg text-sm resize-y focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//                 <p className="text-xs text-gray-500 mt-1">
//                   {formData.excerpt.length}/300 characters
//                 </p>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Category
//                 </label>
//                 <select
//                   value={formData.category}
//                   onChange={(e) =>
//                     setFormData({ ...formData, category: e.target.value })
//                   }
//                   className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent capitalize"
//                 >
//                   {CATEGORIES.map((cat) => (
//                     <option key={cat} value={cat} className="capitalize">
//                       {cat}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Status
//                 </label>
//                 <select
//                   value={formData.published}
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       published: e.target.value === "true",
//                     })
//                   }
//                   className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 >
//                   <option value="false">Draft</option>
//                   <option value="true">Published</option>
//                 </select>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Tags (comma-separated)
//               </label>
//               <input
//                 type="text"
//                 placeholder="fashion, lifestyle, trends"
//                 value={formData.tags.join(", ")}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     tags: e.target.value
//                       .split(",")
//                       .map((t) => t.trim())
//                       .filter(Boolean),
//                   })
//                 }
//                 className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>
//           </div>

//           {/* Featured Media */}
//           <div className="space-y-4 border-t pt-4 sm:pt-6">
//             <h3 className="text-base sm:text-lg font-semibold text-gray-800">
//               Featured Media
//             </h3>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Featured Image
//               </label>
//               {formData.featuredImage && (
//                 <div className="relative mb-2">
//                   <img
//                     src={formData.featuredImage}
//                     alt="Featured"
//                     className="w-full h-32 sm:h-48 object-cover rounded-lg"
//                   />
//                   <button
//                     type="button"
//                     onClick={() =>
//                       setFormData({ ...formData, featuredImage: "" })
//                     }
//                     className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
//                   >
//                     <X className="w-4 h-4" />
//                   </button>
//                 </div>
//               )}
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) =>
//                   e.target.files[0] &&
//                   handleFileUpload(e.target.files[0], "featuredImage")
//                 }
//                 className="w-full text-xs sm:text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//                 disabled={uploadingImage}
//               />
//             </div>
//           </div>

//           {/* Content Blocks */}
//           <div className="space-y-4 border-t pt-4 sm:pt-6">
//             <div className="flex items-center justify-between">
//               <h3 className="text-base sm:text-lg font-semibold text-gray-800">
//                 Content Blocks
//               </h3>
//               <span className="text-xs sm:text-sm text-gray-500">
//                 {formData.contentBlocks.length} block(s)
//               </span>
//             </div>

//             <div className="space-y-4">
//               {formData.contentBlocks.map((block, index) =>
//                 renderContentBlock(block, index)
//               )}
//             </div>

//             {formData.contentBlocks.length === 0 && (
//               <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
//                 <p className="text-sm text-gray-500">
//                   No content blocks yet. Add your first block below.
//                 </p>
//               </div>
//             )}

//             {/* Add Block Buttons */}
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
//               <button
//                 type="button"
//                 onClick={() => addContentBlock(CONTENT_BLOCK_TYPES.HEADING)}
//                 className="flex items-center justify-center gap-2 px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-xs sm:text-sm font-medium"
//               >
//                 <Heading className="w-4 h-4" />
//                 <span className="hidden sm:inline">Heading</span>
//               </button>
//               <button
//                 type="button"
//                 onClick={() => addContentBlock(CONTENT_BLOCK_TYPES.TEXT)}
//                 className="flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xs sm:text-sm font-medium"
//               >
//                 <Type className="w-4 h-4" />
//                 <span className="hidden sm:inline">Text</span>
//               </button>
//               <button
//                 type="button"
//                 onClick={() => addContentBlock(CONTENT_BLOCK_TYPES.IMAGE)}
//                 className="flex items-center justify-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-xs sm:text-sm font-medium"
//               >
//                 <ImageIcon className="w-4 h-4" />
//                 <span className="hidden sm:inline">Image</span>
//               </button>
//               <button
//                 type="button"
//                 onClick={() => addContentBlock(CONTENT_BLOCK_TYPES.VIDEO)}
//                 className="flex items-center justify-center gap-2 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-xs sm:text-sm font-medium"
//               >
//                 <Video className="w-4 h-4" />
//                 <span className="hidden sm:inline">Video</span>
//               </button>
//             </div>
//           </div>

//           {/* SEO (Optional) */}
//           <div className="space-y-4 border-t pt-4 sm:pt-6">
//             <details className="group">
//               <summary className="cursor-pointer text-base sm:text-lg font-semibold text-gray-800 flex items-center justify-between">
//                 <span>SEO Settings (Optional)</span>
//                 <span className="text-gray-400 group-open:rotate-180 transition-transform">
//                   ▼
//                 </span>
//               </summary>
//               <div className="mt-4 space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Meta Title
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="SEO title (defaults to blog title)"
//                     value={formData.metaTitle}
//                     onChange={(e) =>
//                       setFormData({ ...formData, metaTitle: e.target.value })
//                     }
//                     className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Meta Description
//                   </label>
//                   <textarea
//                     placeholder="SEO description (max 160 characters)"
//                     maxLength={160}
//                     value={formData.metaDescription}
//                     onChange={(e) =>
//                       setFormData({
//                         ...formData,
//                         metaDescription: e.target.value,
//                       })
//                     }
//                     rows="2"
//                     className="w-full px-3 py-2 border rounded-lg text-sm resize-y focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                   <p className="text-xs text-gray-500 mt-1">
//                     {formData.metaDescription.length}/160 characters
//                   </p>
//                 </div>
//               </div>
//             </details>
//           </div>

//           {/* Submit Button */}
//           <div className="border-t pt-4 sm:pt-6">
//             <button
//               type="submit"
//               disabled={loading || uploadingImage}
//               className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg hover:shadow-lg transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
//             >
//               {loading ? (
//                 <>
//                   <Loader2 className="w-5 h-5 animate-spin" />
//                   Saving...
//                 </>
//               ) : uploadingImage ? (
//                 <>
//                   <Upload className="w-5 h-5 animate-pulse" />
//                   Uploading...
//                 </>
//               ) : (
//                 <>{currentItem ? "Update Blog Post" : "Create Blog Post"}</>
//               )}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EnhancedBlogModal;
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

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(blogData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to save blog");
      }

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
