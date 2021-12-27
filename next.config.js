const withMdxEnhanced = require('next-mdx-enhanced')

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
  swcMinify: true
}

// module.exports = withMdxEnhanced({
//   layoutpath: 'layouts',
//   defaultLayout: true,
//   fileExtensions: ['md', 'mdx'],
//   remarkPlugins: [],
//   rehypePlugins: [],
//   usesSrc: false,
//   extendFrontMatter: {
//     process: (mdxContent, frontMatter) => {},
//     phase: 'prebuild|loader|both'
//   },
//   reExportDataFetching: false
// })(nextConfig)

module.exports = nextConfig
