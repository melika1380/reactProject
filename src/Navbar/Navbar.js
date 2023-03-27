import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => (
    <ul className="menue Navbar">
        <li>
            <Link className="link" to="/Main">
                <span>Home</span>
            </Link>
        </li>
        <li>
            <Link className="link" to="/contact">
                <span>
                    Contact
                </span>
            </Link>
        </li>
        <li>
            <Link className="link" to="/About">
                <span>
                    About
                </span>
            </Link>
        </li>
    </ul>
);
export default Navbar