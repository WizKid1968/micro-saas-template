"use client";

import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { db } from '../config/firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'
import MaxWidthWrapper from './MaxWidthWrapper'
import { ArrowRight, LogOut } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'

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
    return (
      <MaxWidthWrapper className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold">Loading...</p>
      </MaxWidthWrapper>
    )
  }

  return (
    <section className="bg-slate-50 min-h-screen py-12">
      <MaxWidthWrapper>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6 bg-gray-900 text-white flex justify-between items-center">
            <h2 className="text-2xl font-bold tracking-tighter">Welcome, {user.email}</h2>
            <button 
              onClick={handleLogout}
              className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }), "flex items-center")}
            >
              <span>Logout</span>
              <LogOut className="ml-1.5 h-4 w-4" />
            </button>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Your Data:</h3>
            {data.length === 0 ? (
              <p className="text-gray-600 font-medium">No data available.</p>
            ) : (
              <ul className="space-y-4">
                {data.map(item => (
                  <li key={item.id} className="bg-gray-50 p-4 rounded-lg">
                    <pre className="whitespace-pre-wrap text-sm text-gray-700 font-medium">
                      {JSON.stringify(item, null, 2)}
                    </pre>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}