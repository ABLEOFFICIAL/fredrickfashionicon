// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//   reactCompiler: true,
// };

// export default nextConfig;

// // next.config.js (or next.config.mjs)

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // ... your existing config
//   reactCompiler: true,
//   // ✅ Enable larger file uploads (50MB for videos)
//   experimental: {
//     serverActions: {
//       bodySizeLimit: "50mb",
//     },
//   },

//   // Allow larger API request bodies
//   api: {
//     bodyParser: {
//       sizeLimit: "50mb",
//     },
//   },

//   // ... rest of your config
// };

// export default nextConfig;

// // OR if using CommonJS (module.exports):
// // module.exports = nextConfig;

// next.config.js  (or next.config.mjs — same content)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  experimental: {
    serverActions: {
      bodySizeLimit: "50mb",
    },
  },

  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
