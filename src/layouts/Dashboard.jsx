import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard for my portfolio</h1>
      <Outlet />
    </div>
  )
}

export default Dashboard