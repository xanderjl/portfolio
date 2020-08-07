const React = require("react")
const { LocationProvider } = require("@reach/router")
const { AnimateSharedLayout } = require("framer-motion")
const Layout = require("./src/components/layout").default

exports.wrapRootElement = ({ element }) => {
  return (
    <LocationProvider>
      <AnimateSharedLayout>
        <Layout>{element}</Layout>
      </AnimateSharedLayout>
    </LocationProvider>
  )
}
