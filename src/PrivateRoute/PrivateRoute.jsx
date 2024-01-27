/* eslint-disable react/prop-types */

import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider'
import { useContext } from 'react'

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()

  if (loading) {
    return <div>Loading...</div>
  }

  if (user) {
    return children
  }

  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}
