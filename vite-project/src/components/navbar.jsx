import React from "react";
import { Link } from "react-router-dom";

const Navbar = ()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className ="container">
                <Link className = 'navbar-brand'>
                    Happy Cake
                </Link>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className = "navbar-nav ms-auto">
                    <li className = "nav-item">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link className="nav-link" to="/Contacto">
                            Contacto
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar