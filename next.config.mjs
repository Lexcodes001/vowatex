/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  // reactStrictMode: false,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     "/": { page: "/" },
  //     "/about": { page: "/about" },
  //   };
  // },
};

export default nextConfig;
