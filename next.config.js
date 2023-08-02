/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cwwp2.dot.ca.gov',
                port: '',
                pathname: '/**',
            },
        ],
        minimumCacheTTL: 60,
        //86400
    },
}

module.exports = nextConfig
