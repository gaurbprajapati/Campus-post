import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from './Pages/Home/NavBar'
import Footer from './Components/Footer/Footer'

const Layout = () => {
    return (

        <main>
            <NavBar />
            <Outlet />
            <Footer />
        </main>

    )
}

export default Layout;

