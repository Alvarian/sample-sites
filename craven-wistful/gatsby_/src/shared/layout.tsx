/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FunctionComponent } from "react";
import { graphql, useStaticQuery } from 'gatsby';

import PropTypes from "prop-types";

import "./layout.css";
import SEO from "./seo";
import Footer from "./modules/Footer";
import Navbar from "./modules/Navbar";

const Layout: FunctionComponent = ({ children }) => {
  const directories = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          directories {
            name,
            children {
              name,
              endpoint
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <SEO title="Home" />
      <Navbar directories={directories} />

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >{children}</div>

      <Footer directories={directories} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
