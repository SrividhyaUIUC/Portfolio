/** @type {import('next').NextConfig} */
// For GitHub Project Pages, set repo name and uncomment basePath + assetPrefix:
// const repo = "your-repo-name";
const nextConfig = {
    output: "export",
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;