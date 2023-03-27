import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Layout.css"

const Layout = ({ children }) => (
    <div>
        <div><Navbar /></div>
        <div className="Layout">
           
            {children}
        </div>
        <Footer />
    </div>
);
export default Layout