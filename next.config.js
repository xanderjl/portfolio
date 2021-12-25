const STUDIO_REWRITE = {
  source: "/studio/:path",
  destination:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3333/studio/:path*"
      : "/studio/index.html",
}

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  rewrites: () => [STUDIO_REWRITE],
  swcMinify: true,
}
