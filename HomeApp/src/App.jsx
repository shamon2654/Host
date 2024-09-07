import React from "react"
import Home from "./Components/Home"
import {HashRouter as Router, Route, Routes, Link } from "react-router-dom"
import ProfileForm from "./Components/ProfileForm"



const App = ({token,name}) => {
  console.log(token)
  return (

    <div>
      
      <Router>

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="form" element={<ProfileForm name={name} token={token} />}/>
      </Routes>
      </Router>
    </div>
  )
}

export default App
