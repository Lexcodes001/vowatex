/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
  env: {
    SMTP_USER: "vowatexcontentsol@gmail.com",
    SMTP_PASSWORD: "gykieexjqpgnmjem",
    SMTP_FROM: "vowatexcontentsol@gmail.com",
  },
};

export default nextConfig;
