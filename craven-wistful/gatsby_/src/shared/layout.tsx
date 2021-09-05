/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FunctionComponent } from "react"
import PropTypes from "prop-types"

import "./layout.css"
import SEO from "./seo"
import Footer from "./modules/Footer"
import Navbar from "./modules/Navbar"

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <SEO title="Home" />
      <Navbar />

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >{children}</div>

      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
