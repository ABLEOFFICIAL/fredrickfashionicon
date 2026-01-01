import React from "react";

export default function Loading({ size = 20, color = "#ffffff", speed = 1.2 }) {
  const balls = [5, 4, 6, 4, 5];
  const count = balls.length;
  const radius = size * 0.35;
  const center = size / 2;

  return (
    <div
      className="flex items-center justify-center"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <div
        className="relative"
        style={{
          width: size,
          height: size,
          animation: `spinner-rotate ${speed}s linear infinite`,
        }}
      >
        {balls.map((s, i) => {
          const angle = (i / count) * Math.PI * 2;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          const ballSize = (s / 10) * (size * 0.35);
          const delay = (i / count) * 0.6;

          return (
            <span
              key={i}
              style={{
                position: "absolute",
                left: x,
                top: y,
                width: ballSize,
                height: ballSize,
                transform: "translate(-50%, -50%)",
                borderRadius: "9999px",
                background: color,
                display: "block",
                animation: `ball-pulse 0.9s ease-in-out ${delay}s infinite both`,
                boxShadow: `0 2px 6px rgba(0,0,0,0.12)`,
              }}
            />
          );
        })}

        {/* center subtle dot (optional) */}
        <span
          style={{
            position: "absolute",
            left: center,
            top: center,
            width: Math.max(2, size * 0.08),
            height: Math.max(2, size * 0.08),
            transform: "translate(-50%, -50%)",
            borderRadius: "9999px",
            background: "rgba(255,255,255,0.06)",
            pointerEvents: "none",
          }}
        />
      </div>

      <style>{`
        @keyframes spinner-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes ball-pulse {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.9; }
          50% { transform: translate(-50%, -50%) scale(1.15); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(0.85); opacity: 0.9; }
        }

        /* make the rotation more visible on hover (optional) */
        .relative:hover { animation-duration: calc(${speed}s * 0.75); }
      `}</style>
    </div>
  );
}
