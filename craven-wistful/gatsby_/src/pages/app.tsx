import React from "react"
import { RandomPerson } from "./Home/RandomPerson"
import Page2 from "./Page2"
import { Router } from "@reach/router"
import Layout from "../shared/layout"

const App = () => {
  return (
    <Layout>
      <Router>
        <Page2 path="/app/page2" />
        <RandomPerson path="/app/random-person/:results" />
      </Router>
    </Layout>
  )
}

export default App
