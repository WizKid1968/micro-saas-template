import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import firebase from '../config/firebase'

export default function Dashboard() {
  const { user, logout } = useAuth()
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore()
      const snapshot = await db.collection('data').where('userId', '==', user.uid).get()
      setData(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
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