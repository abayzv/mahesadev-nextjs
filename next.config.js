/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                hostname: 'picsum.photos',
                protocol: 'https',
            },
            {
                hostname: 'img.dummyapi.io',
                protocol: 'https',
            }
        ]
    }
}

module.exports = nextConfig
