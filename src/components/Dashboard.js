"use client";

import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { db } from '../config/firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'

export default function Dashboard() {
  const { user, logout } = useAuth()
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const q = query(collection(db, 'data'), where('userId', '==', user.uid))
        const querySnapshot = await getDocs(q)
        setData(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
      }
    }
    fetchData()
  }, [user])

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Welcome, {user.email}</h2>
      <button onClick={handleLogout} className="p-2 bg-red-500 text-white rounded">
        Logout
      </button>
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Your Data:</h3>
        <ul>
          {data.map(item => (
            <li key={item.id}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}