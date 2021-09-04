import React from "react"
import Link from "gatsby-link"

import Layout from "../shared/layout"
import SEO from "../shared/seo"
import { Button } from '@material-ui/core'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Button>Push me daddy</Button>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
