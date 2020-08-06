const React = require("react")
const { LocationProvider } = require("@reach/router")
const { AnimateSharedLayout } = require("framer-motion")
const Layout = require("./src/components/layout").default

require("./src/styles/styles.sass")

exports.wrapRootElement = ({ element }) => {
  return (
    <AnimateSharedLayout>
      <LocationProvider>
        <Layout>{element}</Layout>
      </LocationProvider>
    </AnimateSharedLayout>
  )
}

exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  window.scrollTo(...[0, 0])

  return false
}
