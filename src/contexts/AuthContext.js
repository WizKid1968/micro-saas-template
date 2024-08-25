"use client";

import React, { createContext, useState, useEffect, useContext } from 'react'
import firebase from '../config/firebase'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    user,
    loading,
    login: (email, password) => firebase.auth().signInWithEmailAndPassword(email, password),
    signup: (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password),
    logout: () => firebase.auth().signOut(),
  }

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}