"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";

// ─── icons (inline SVGs — no extra dependency) ──────────────────────────────
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M8 5v14l11-7z" />
  </svg>
);
const PauseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);
const VolumeOnIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
  </svg>
);
const VolumeMuteIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
  </svg>
);
const FullscreenIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 8h-3v2h5v-5h-2v3zM15 5v2h3v3h2V5h-5z" />
  </svg>
);

// ─── helpers ─────────────────────────────────────────────────────────────────
const formatTime = (secs) => {
  if (!isFinite(secs)) return "0:00";
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
};

// ─── main component ─────────────────────────────────────────────────────────
/**
 * Props
 *  src          – video URL
 *  caption      – optional caption shown below
 *  autoPlayOnHover – if true, hovering the container plays (muted); leaving pauses & resets
 *  className    – extra classes on the wrapper
 */
const VideoPlayer = ({
  src,
  caption,
  autoPlayOnHover = false,
  className = "",
}) => {
  const videoRef = useRef(null);

  // ── state ──────────────────────────────────────────────────────────────
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [muted, setMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [hoverPlaying, setHoverPlaying] = useState(false); // only used when autoPlayOnHover
  const hideTimer = useRef(null);

  // ── sync video events ──────────────────────────────────────────────────
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onTime = () => setCurrentTime(v.currentTime);
    const onLoad = () => setDuration(v.duration);
    const onEnd = () => setPlaying(false);

    v.addEventListener("timeupdate", onTime);
    v.addEventListener("loadedmetadata", onLoad);
    v.addEventListener("ended", onEnd);

    return () => {
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("loadedmetadata", onLoad);
      v.removeEventListener("ended", onEnd);
    };
  }, [src]);

  // ── auto-hide controls after 3 s of inactivity (only when playing) ────
  const resetHideTimer = useCallback(() => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setShowControls(true);
    hideTimer.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (playing && !autoPlayOnHover) resetHideTimer();
    else setShowControls(true);
    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, [playing, autoPlayOnHover, resetHideTimer]);

  // ── controls logic ─────────────────────────────────────────────────────
  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const toggleFullscreen = () => {
    const container = videoRef.current?.parentElement;
    if (!container) return;
    if (!document.fullscreenElement) container.requestFullscreen?.();
    else document.exitFullscreen?.();
  };

  const handleScrub = (e) => {
    const v = videoRef.current;
    if (!v || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    v.currentTime = (x / rect.width) * duration;
  };

  // ── hover-to-play (card thumbnail mode) ────────────────────────────────
  const handleMouseEnter = () => {
    if (!autoPlayOnHover) return;
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play();
    setHoverPlaying(true);
  };
  const handleMouseLeave = () => {
    if (!autoPlayOnHover) return;
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
    v.muted = false;
    setHoverPlaying(false);
  };

  // ── progress %  ────────────────────────────────────────────────────────
  const progress = duration ? (currentTime / duration) * 100 : 0;

  // ── whether to show the overlay ────────────────────────────────────────
  // in hover-play mode controls are always hidden; in normal mode show on hover or when paused
  const overlayVisible = autoPlayOnHover ? false : showControls || !playing;

  return (
    <div
      className={`relative group w-full overflow-hidden rounded-lg bg-black ${className}`}
    >
      {/* ── video element ──────────────────────────────────────────────── */}
      <video
        ref={videoRef}
        src={src}
        loop={autoPlayOnHover}
        playsInline
        className="w-full h-full object-cover"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={resetHideTimer}
        onClick={autoPlayOnHover ? undefined : togglePlay}
      />

      {/* ── gradient + controls overlay ────────────────────────────────── */}
      {!autoPlayOnHover && (
        <div
          className={`
            absolute inset-0 flex flex-col justify-end
            transition-opacity duration-300
            ${overlayVisible ? "opacity-100" : "opacity-0"}
            group-hover:opacity-100
          `}
          onMouseMove={resetHideTimer}
        >
          {/* dark gradient at bottom */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          {/* centered big play button (shown when paused) */}
          {!playing && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white">
                <PlayIcon />
              </div>
            </div>
          )}

          {/* bottom bar */}
          <div className="relative z-10 px-3 pb-3 pt-1 space-y-1">
            {/* progress bar */}
            <div
              className="w-full h-1 bg-white/30 rounded-full cursor-pointer group/scrub"
              onClick={handleScrub}
            >
              <div
                className="h-full bg-[#f7f1e8] rounded-full relative transition-all"
                style={{ width: `${progress}%` }}
              >
                {/* thumb dot */}
                <span className="absolute -right-1.5 -top-1 w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover/scrub:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* row: play | time | spacer | volume | fullscreen */}
            <div className="flex items-center justify-between text-white text-xs">
              {/* left cluster */}
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="hover:text-[#f7f1e8] transition-colors"
                >
                  {playing ? <PauseIcon /> : <PlayIcon />}
                </button>
                <span className="tabular-nums opacity-80">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              {/* right cluster */}
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleMute}
                  className="hover:text-[#f7f1e8] transition-colors"
                >
                  {muted ? <VolumeMuteIcon /> : <VolumeOnIcon />}
                </button>
                <button
                  onClick={toggleFullscreen}
                  className="hover:text-[#f7f1e8] transition-colors"
                >
                  <FullscreenIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── caption ─────────────────────────────────────────────────── */}
      {caption && (
        <p className="absolute bottom-0 left-0 right-0 text-center text-xs text-[#f7f1e8]/80 bg-black/50 py-1 px-2">
          {caption}
        </p>
      )}
    </div>
  );
};

export default VideoPlayer;
