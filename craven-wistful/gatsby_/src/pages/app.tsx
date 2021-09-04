import React from "react"
import { RandomPerson } from "./Home/RandomPerson"
import { Router as MyRouter } from "@reach/router"

const Router = () => {
  return (
    <MyRouter>
      <RandomPerson path="/app/random-person/:results" />
    </MyRouter>
  )
}

export default Router
