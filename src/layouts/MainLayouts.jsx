import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '../shared'

const MainLayouts = () => {
    return (
        <div className='Container'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayouts