// app/style-with-us/blog-details/[id]/page.jsx
"use client";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import VideoPlayer from "@/app/components/VideoPlayer";

// ─── helpers ─────────────────────────────────────────────────────────────────
const formatDate = (iso) => {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// ─── section renderers ───────────────────────────────────────────────────────
const TextSection = ({ text }) => (
  <section className="max-w-2xl mx-auto">
    <p className="text-[#4a4741] leading-[1.9] text-base md:text-[17px]">
      {text}
    </p>
  </section>
);

const ImageSection = ({ url, caption }) => (
  <section className="w-full">
    <figure>
      <img
        src={url}
        alt={caption || ""}
        className="w-full rounded-lg object-cover shadow-sm"
        style={{ maxHeight: "520px", objectPosition: "center" }}
      />
      {caption && (
        <figcaption className="text-xs text-gray-400 text-center mt-2 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  </section>
);

const VideoSection = ({ url, caption }) => (
  <section className="w-full">
    <VideoPlayer src={url} caption={caption} style={{ maxHeight: "700px" }} />
  </section>
);

// ─── decorative divider ──────────────────────────────────────────────────────
const SectionDivider = () => (
  <div className="flex items-center justify-center py-2">
    <span className="text-[#4a4741]/40 text-xl tracking-widest">• • •</span>
  </div>
);

// ─── page ────────────────────────────────────────────────────────────────────
const BlogDetails = () => {
  const { id } = useParams();
  const { blogs } = useSelector((state) => state.context);

  const clickedPost = useMemo(() => {
    if (!Array.isArray(blogs)) return null;
    return blogs.find((blog) => blog._id === id) || null;
  }, [blogs, id]);

  const sortedBlocks = useMemo(() => {
    if (!clickedPost?.contentBlocks) return [];
    return [...clickedPost.contentBlocks].sort((a, b) => a.order - b.order);
  }, [clickedPost]);

  // ── not found ────────────────────────────────────────────────────────────
  if (!clickedPost) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-[#4a4741]">
        <p className="text-lg opacity-60">
          Blog post not found or still loading…
        </p>
      </div>
    );
  }

  // ── read-time estimate ───────────────────────────────────────────────────
  const wordCount = sortedBlocks
    .filter((b) => b.type === "text")
    .reduce((acc, b) => acc + (b.text?.split(" ").length || 0), 0);
  const readMins = Math.max(1, Math.round(wordCount / 200));

  // ── render ───────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* ════ HERO IMAGE ════════════════════════════════════════════════ */}
      {clickedPost.featuredImage && (
        <div className="w-full" style={{ height: "420px" }}>
          <img
            src={clickedPost.featuredImage}
            alt={clickedPost.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* ════ CONTENT COLUMN ════════════════════════════════════════════ */}
      <div className="max-w-3xl mx-auto px-5 md:px-6 py-10 md:py-14">
        {/* ── editorial header ───────────────────────────────────────── */}
        <header className="mb-10 md:mb-14">
          {/* category pills */}
          {clickedPost.category?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {clickedPost.category.map((cat) => (
                <span
                  key={cat}
                  className="text-xs uppercase tracking-widest text-[#4a4741]/60 border border-[#4a4741]/25 rounded-full px-3 py-1"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}

          {/* title */}
          <h1 className="text-3xl md:text-[42px] leading-[1.2] font-light text-[#4a4741] mb-4">
            {clickedPost.title}
          </h1>

          {/* meta: author · date · read time */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-[#4a4741]/50">
            {clickedPost.author?.name && (
              <span className="font-medium text-[#4a4741]/70">
                {clickedPost.author.name}
              </span>
            )}
            <span>·</span>
            <span>{formatDate(clickedPost.createdAt)}</span>
            <span>·</span>
            <span>{readMins} min read</span>
          </div>
        </header>

        {/* ── featured video (hero video, sits right after header) ── */}
        {clickedPost.featuredVideo?.url && (
          <>
            <div className="mb-10 md:mb-14">
              <VideoPlayer
                src={clickedPost.featuredVideo.url}
                caption={clickedPost.featuredVideo.caption}
                style={{ maxHeight: "700px" }}
              />
            </div>
            <SectionDivider />
          </>
        )}

        {/* ── dynamic content blocks ─────────────────────────────── */}
        <div className="space-y-10 md:space-y-14">
          {sortedBlocks.map((block, i) => {
            switch (block.type) {
              case "text":
                return block.text ? (
                  <TextSection key={block._id || i} text={block.text} />
                ) : null;

              case "image":
                return block.image?.url ? (
                  <ImageSection
                    key={block._id || i}
                    url={block.image.url}
                    caption={block.image.caption}
                  />
                ) : null;

              case "video":
                return block.video?.url ? (
                  <VideoSection
                    key={block._id || i}
                    url={block.video.url}
                    caption={block.video.caption}
                  />
                ) : null;

              default:
                return null;
            }
          })}
        </div>

        {/* ── tags footer ──────────────────────────────────────── */}
        {clickedPost.tags?.length > 0 && (
          <div className="mt-14 pt-8 border-t border-[#4a4741]/15 flex flex-wrap gap-2">
            {clickedPost.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-[#4a4741]/8 text-[#4a4741]/60 rounded-full px-3 py-1"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
