/** @type {import('next').NextConfig} */
const repo = "about-me";

const nextConfig = {
    output: "export", // Enable static export for GitHub Pages
    images: {
        unoptimized: true, // Required for static export
    },
    basePath: `/${repo}`,
    assetPrefix: `/${repo}/`,
};

module.exports = nextConfig;