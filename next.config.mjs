/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "localhost:3000",
            port: "",
            pathname: "/**",
        },
        {
            protocol: "https",
            hostname: "raw.githubusercontent.com",
            port: "",
            pathname: "/**",
        }],
    },
};

export default nextConfig;
