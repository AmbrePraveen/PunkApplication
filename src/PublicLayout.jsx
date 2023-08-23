import React from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import Hero from './Components/Hero'

const PublicLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>

        </>
    )
}

export default PublicLayout