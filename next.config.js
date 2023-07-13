/** @type {import('next').NextConfig} */
const withImages = require('next-images');

const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        disableStaticImages: true
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
    withImages
};

module.exports = nextConfig;