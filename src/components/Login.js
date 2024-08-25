import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, signup } = useAuth()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await login(email, password)
    } catch (error) {
      console.error('Error logging in:', error)
    }
  }

  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      await signup(email, password)
    } catch (error) {
      console.error('Error signing up:', error)
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login or Sign Up</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          Login
        </button>
      </form>
      <button onClick={handleSignup} className="w-full mt-2 p-2 bg-green-500 text-white rounded">
        Sign Up
      </button>
    </div>
  )
}