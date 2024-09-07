import React from "react"
import NavBar from "./components/NavBar"
import Display from "./components/Display"

const App = () => {
  return (
    <div className="h-screen">
      <div className="h-[10%] ">
        <NavBar />
      </div>
      <Display />
    </div>
  )
}

export default App
