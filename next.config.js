/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
    openAnalyzer: false,
});

const nextConfig = {
    reactStrictMode: false,
    compiler: {
        styledComponents: true,
    },
    experimental: {
        mdxRs: true,
    },
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    // 도메인 모두 허용 https://stackoverflow.com/questions/71235874/how-to-allow-all-domains-for-image-nextjs-config
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            }
        ],
    },
    webpack(config) {
        config.module.rules.push(
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack'],
            }
        );

        return config;
    },
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "https://openapi.naver.com/:path*"
            },
            {
                source: "/krtp/:path*",
                destination: "https://kartrider-tips-api.fly.dev/api/:path*"
            },
        ];
    }
};


const withMDX = require("@next/mdx")();
module.exports = withBundleAnalyzer(withMDX(nextConfig));