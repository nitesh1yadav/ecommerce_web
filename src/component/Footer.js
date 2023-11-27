import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { FaYoutube } from "react-icons/fa";
import { NavLink } from 'react-router-dom';



const Footer = () => {
    return (
        <>
            <footer className="footer p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <a href="" className="footer-logo ">

                                <img className="mb-4" src="assets/img/logo/169219063664dcc7acd8c2a.png" width="120px" alt="" />
                            </a>

                            <div className="footer-contact">
                                <ul>
                                    <li>
                                        <a href="">
                                            <IoLocationSharp className='footer_icons' />
                                            <span>A-21, Anand vihar, Behind of Ramrakhi Hotel, Chittaurgarh-312001, Rajasthan,
                                                India</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <IoIosCall className='footer_icons' />
                                            <span>
                                                +91 889-032-9032</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <MdEmail className='footer_icons' />
                                            <span>info@heartswithfingers.com</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-lg-2 col-6">
                            <h6 className="footer-title">
                                Can we help you?
                            </h6>
                            <div className="footer-list">
                                <ul>
                                    <li><a href="">FAQs</a></li>
                                    <li><a href="">Track Orders</a></li>
                                    <li><a href="">Shipping & Returns</a></li>
                                    <li><a href="">Terms Of Services</a></li>
                                    <li><a href="">Privacy Policy</a></li>
                                    <li><a href="">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <h6 className="footer-title">
                                Get to know us?
                            </h6>
                            <div className="footer-list">
                                <ul>
                                    <li><NavLink to="/home">Home</NavLink></li>
                                    <li><NavLink to="/products">Products</NavLink></li>
                                    <li><NavLink to="/conatct">Conatct</NavLink></li>
                                    <li><NavLink to="/about">About Us</NavLink></li>
                                </ul>
                            </div>
                            <h6 className="footer-title">
                                Let's be friends
                            </h6>
                            <div className="footer-list">
                                <ul>
                                    <li><a href="">Partner with Us</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <h6 className="footer-title">
                                Newsletter
                            </h6>
                            <p>
                                Enter your email address to register
                            </p>
                            <div className="subscribe-form mb-4"><input className="email newsletterRequired" type="email"
                                placeholder="Enter your email here.." name="newsletter_email" value="" />
                                <div className="subscribe-button"><input id="mc-embedded-subscribe" className="button" type="button"
                                    name="subscribe" value="Subscribe" /></div>
                            </div>
                            <h6 className="footer-title">
                                Follow Us
                            </h6>
                            <div className="footer-social">
                                <ul>
                                    <li><a href=""><FaFacebookF /></a></li>
                                    <li><a href=""><FaLinkedinIn /></a></li>
                                    <li><a href=""><FaTwitter /></a></li>
                                    <li><a href=""><FaYoutube /></a></li>
                                    <li><a href=""><FaInstagram /></a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center mt-5">
                        <div className="col-lg-12">

                            <p>@Copyright By Heart With fingers in {new Date().getFullYear()}</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer