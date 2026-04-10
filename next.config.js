/** @type {import('next').NextConfig} */
// For GitHub Project Pages, set repo name and uncomment basePath + assetPrefix:
// const repo = "your-repo-name";
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    // basePath: `/${repo}`,
    // assetPrefix: `/${repo}/`,
};

module.exports = nextConfig;