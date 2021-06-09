const composePlugins = require("next-compose-plugins")
const withMdxEnhanced = require("next-mdx-enhanced")

const STUDIO_REWRITE = {
  source: "/studio/:path",
  destination:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3333/studio/:path*"
      : "/studio/index.html",
}

module.exports = composePlugins([
  withMdxEnhanced({
    layoutPath: "./templates",
  }),
  {
    images: {
      domains: ["cdn.sanity.io"],
    },
    future: {
      webpack5: false,
    },
    rewrites: () => [STUDIO_REWRITE],
  },
])
