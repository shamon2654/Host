import React, { Suspense, lazy,useState } from "react"
import { Route, Routes } from "react-router-dom"

const  Home = lazy(()=>import ("homeApp/Home"))  
import From from "fromApp/From"
import LoginForm from "./Login"
import { useSelector } from "react-redux"



const Display = () => {
  const { token,user } = useSelector((state) => state.user)
  
 

  return (
    <div className="bg-gray-200 h-full">
      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route
          path="/home/*"
          element={
            <Suspense fallback={<div>loading home...</div>}>
              <Home token={token } name={name} />
              
            </Suspense>
          }
        />
        
        <Route
          path="/form/*"
          element={
            <Suspense fallback={<div>loading home...</div>}>
              <From />
            </Suspense>
          }
        />
      </Routes>
    </div>
  )
}

export default Display
