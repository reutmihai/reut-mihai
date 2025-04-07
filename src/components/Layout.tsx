import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout : React.FC = () => {
  return (
    <>
    <Navbar />
    <main>
    <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default Layout