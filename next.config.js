// /** @type {import('next').NextConfig} */
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })


// const nextConfig = {
//   // assetPrefix: '',
//   // assetPrefix: isProd  ? 'https://www.iwebwiser.com/' : '',
//   useFileSystemPublicRoutes: false,
//   swcMinify: true,
//   reactStrictMode: true,
//   env: {
//     PORT: 6500,
//   },
//   // images: {
//   //   remotePatterns: [
//   //     {
//   //       protocol: 'https',
//   //       hostname: 'iwebwiser.com/',
//   //       // port: '6500',
//   //       pathname: 'https://iwebwisermain.s3.ap-south-1.amazonaws.com',
//   //     },
//   //   ],
//   // },
// };

// module.exports = withBundleAnalyzer({
//   nextConfig
// })

const isProd = process.env.NODE_ENV === 'production'


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
    experimental: {
    appDir: true,
  },
  distDir: "out",
  output: "standalone",
//   assetPrefix: isProd  ? 'https://www.iwebwiser.com/' : '',
eslint:{
  ignoreDuringBuilds:true
},
images: {
//   minimumCacheTTL: 60,
//   unoptimizzed:true,
     loader: "custom",
    loaderFile: './ImageLoader.js'
},
cacheHandler: require.resolve('./cache-handler.js'),
cacheMaxMemorySize: 0 // disable default in-memory caching
  // useFileSystemPublicRoutes: false,
}

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*{/}?',
        headers: [
          {
            key: 'X-Accel-Buffering',
            value: 'no',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
