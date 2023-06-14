import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate = useNavigate()

  const handleOnClick = (e) => {
    e.preventDefault()
    localStorage.clear()
    navigate('/')
  }


  return (
    <button onClick={handleOnClick}>Logout</button>
  )
}

export default Logout