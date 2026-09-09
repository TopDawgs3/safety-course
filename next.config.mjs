/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/safety-course",
  assetPrefix: "/safety-course",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
