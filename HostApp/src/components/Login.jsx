// src/components/LoginForm.js
import React, { useEffect, useState } from "react"
import { login } from "../utils/api"
import { useDispatch } from "react-redux"
import { LoadUserSucces } from "../redux/reducers/User"

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          const res = await login({ email, password })
          dispatch(
            LoadUserSucces({
              user: { email },
              token: res.token,
            })
            )
            setEmail("")
            setPassword("")
            
        } catch (error) {
          console.log(error.message)
        }
      }

   
      useEffect(() => {
        const handleMessage = (event) => {
          // Ensure the message is from the expected origin
          if (event.origin === 'http://localhost:5173') {
            const token = event.data;
            if (token) {
              console.log('Received token:', token);
              localStorage.setItem('authToken', token);
            }
          }
        };
    
        // Add event listener for messages
        window.addEventListener('message', handleMessage);
    
        // Cleanup listener on component unmount
        return () => {
          window.removeEventListener('message', handleMessage);
        };
      }, []);

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600 text-center">
          Don't have an account?{" "}
          <a href="#" className="text-indigo-600 hover:text-indigo-700">
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}

export default LoginForm
