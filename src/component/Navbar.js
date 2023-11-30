import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header className="header">
                <div className="container d-flex">
                    <div className="header-left">
                        <a href="" className="logo">
                            <img src="https://studykee.com/2023/triveniexports/csadmin/public/img/uploads/settings/1698239624653914884b8a1.png" width="125px" height="52px" className="img-fluid"
                                alt="" />
                        </a>
                    </div>
                    <div className="header-center">
                        <nav className="navbar navbar-expand-lg">
                            <ul className="navbar-nav">
                                <li className="nav-item"><NavLink className="nav-link" to="/home">Home</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/products">Products</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
                                
                            </ul>
                        </nav>
                    </div>
                    <div className="header-right">
                    <a className="nav-link" href="/cart"> <CiShoppingCart className='shopping_cart_logo' /> </a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar