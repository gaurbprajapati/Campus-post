import React from 'react'
import {Outlet} from 'react-router-dom'

import Footer from './Components/Footer/Footer'
import NavBar from './Pages/Home/NavBar'

const Layout = () => {
    return (
        <main>
            <NavBar />
            <Outlet />
            <Footer />
        </main>
    )
}

export default Layout