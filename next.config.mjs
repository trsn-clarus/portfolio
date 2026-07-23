/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export for GitHub Pages
  output: "export",
  // Site is served under https://trsnclarus.com/portfolio/
  basePath: "/portfolio",
  assetPrefix: "/portfolio",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
