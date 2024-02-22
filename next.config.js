// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//       },
//     ],
//   },
//   experimental: {
//     serverActions: true,
//   },
// };

// module.exports = nextConfig;

// next.config.js

module.exports = {
  images: {
    domains: ["avatars.githubusercontent.com", "images.unsplash.com"], // Add 'avatars.githubusercontent.com' here
  },
  experimental: {
    serverActions: true,
  },
};
