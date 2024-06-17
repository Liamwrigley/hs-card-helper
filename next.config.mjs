/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'art.hearthstonejson.com',
                port: '',
                pathname: '/v1/*/latest/enUS/256x/**',
            },
            {
                protocol: 'https',
                hostname: 'bgknowhow.com',
                port: '',
                pathname: '/images/**',
            },
            {
                protocol: 'https',
                hostname: 'd15f34w2p8l1cc.cloudfront.net',
                port: '',
                pathname: '/hearthstone/**',
            },
        ]
    }
};

export default nextConfig;