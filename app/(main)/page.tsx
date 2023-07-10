import React from "react"
import Hero from "../components/hero"
import MainFeatures from "../partials/main-features"

const Main = () => {
  return (
    <React.Fragment>
      <Hero message='IF A TREE FALLS...' />
      <MainFeatures />
    </React.Fragment>
  )
}

export default Main