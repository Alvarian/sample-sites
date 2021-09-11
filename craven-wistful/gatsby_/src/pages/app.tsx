import React from "react"
import { RandomPerson } from "./Home/RandomPerson"
import About from "./About"
import Contact from "./Contact"
import Leadership from "./Leadership"
import Testimonies from "./Testimonies"
import { Router } from "@reach/router"
import Layout from "../shared/layout"

const App = () => {
  return (
    <Layout>
      <Router>
        <RandomPerson path="/app/random-person/:results" />
        
        <About path="/about" />
        <Contact path="/contact" />
        <Leadership path="/leadership" />
        <Testimonies path="/testimonies" />
      </Router>
    </Layout>
  )
}

export default App
