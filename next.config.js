/** @type {import('next').NextConfig} */
const withImages = require('next-images');

const nextConfig = {
    // output: 'export',
    experimental: {
        appDir: true,
        scrollRestoration: true,
    },
    images: {
        disableStaticImages: true,
        unoptimized: true
    },
    compiler: {
        styledComponents: true,
    },
    env: {
        BASE_URL: process.env.BASE_URL,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
    withImages,
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "https://openapi.naver.com/:path*"
            },
        ];
    }
};

module.exports = nextConfig;