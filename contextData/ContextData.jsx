"use client"

import { createContext, useState, useContext } from "react"

const UserContext = createContext()

export const useUser = () => {
  return useContext(UserContext)
}

export const UserProvider = ({children}) => {
  const [user, setUser] = useState({
    name: "Sachin",
    age: 22,
    role: "Frontend Developer",
    city: "Palwal"
  })

  const updateUser = (value) => {
    setUser({
      ...user,
      value
    })
  }


  return <UserContext.Provider value={{user, updateUser}}>{children}</UserContext.Provider>
}