import React from "react"
import { useNavigate } from "react-router-dom"

const NavBar = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full h-full bg-[#47a4cf] ">
      <div className="flex list-none justify-start items-center gap-10 p-2 ">
        <div
          onClick={() => {
            navigate("/"), window.location.reload()
          }}
          className="bg-[#da521d] w-20  p-1 font-bold  mt-2 rounded-lg cursor-pointer shadow-lg"
        >
          <li className="ml-2">Login</li>
        </div>
        <div
          onClick={() => {
            navigate("/home")
          }}
          className="bg-[#da521d] w-20  p-1 font-bold  mt-2 rounded-lg cursor-pointer shadow-lg"
        >
          <li className="ml-2">Home</li>
        </div>
        <div
          onClick={() => navigate("/form")}
          className="bg-[#da521d] w-20  p-1 font-bold  mt-2 rounded-lg cursor-pointer shadow-lg"
        >
          <li className="ml-2">From</li>
        </div>
        <div
          onClick={() => {
            navigate("/home#/form")
          }}
          className="bg-[#da521d] w-20  p-1 font-bold  mt-2 rounded-lg cursor-pointer shadow-lg"
        >
          <li className="ml-2">From1</li>
        </div>
      </div>
    </div>
  )
}

export default NavBar
