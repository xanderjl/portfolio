const STUDIO_REWRITE = {
  source: '/studio/:path',
  destination:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3333/studio/:path*'
      : '/studio/index.html'
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io']
  },
  rewrites: () => [STUDIO_REWRITE],
  swcMinify: true,
  webpack: (config, options) => {
    config.resolve.fallback = { fs: false, path: false }

    // config.module.rules.push({
    //   test: /\.mdx?$/,
    //   use: [
    //     // The default `babel-loader` used by Next:
    //     options.defaultLoaders.babel,
    //     {
    //       loader: '@mdx-js/loader',
    //       /** @type {import('@mdx-js/loader').Options} */
    //       options: {
    //         /* jsxImportSource: …, otherOptions… */
    //       }
    //     }
    //   ]
    // })

    return config
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
}

module.exports = nextConfig
