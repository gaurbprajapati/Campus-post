import React from 'react'
import NavBar from './Pages/Home/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'

const Layout = () => {
  return (
    <main>
        <NavBar/>
        <Outlet/>
        <Footer/>  
    </main>
  )
}

export default Layout