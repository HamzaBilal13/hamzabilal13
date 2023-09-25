import React from 'react'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Webprojects from '../Pages/Webprojects'
import { Routes, Route, Link } from 'react-router-dom'
import { AiFillFacebook, AiFillLinkedin, AiOutlineWhatsApp } from "react-icons/ai";

const ExtraNavbar = () => {

    return (
        <div>
            <div className="w-full">
                <div className="shadow-sm">
                    <div className="hidden md:flex justify-between">
                        <ul className="md:py-6 md:px-6 lg:px-12 lg:py-6">
                            <h4 className="md:text-2xl lg:text-2xl font-bold text-red-500">Hamza Bilal</h4>
                        </ul>
                        <ul className="md:px-4 md:py-4">

                            <div className="md:flex md:justify-center">
                           
                                <li className="lg:px-4 md:px-3 py-2 hover:text-red-500 hover:font-semibold hover:border-b-[1px] hover:border-red-500 ">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="lg:px-4 md:px-3 py-2 hover:text-red-500 border-red-500 hover:font-semibold hover:border-b-[1px] hover:border-red-500">
                                    <Link to="/Webprojects">Projects</Link>
                                </li>
                                <li className="lg:px-4 md:px-3 py-2 hover:text-red-500 hover:font-semibold border-red-500 hover:border-b-[1px] hover:border-red-500">
                                    <Link to="/About">About</Link>
                                </li>
                                <li className="lg:px-4 md:px-3 py-2 hover:text-red-500 hover:font-semibold border-red-500 hover:border-b-[1px] hover:border-red-500">
                                    <Link to="/Contact">Contact</Link>
                                </li>
                                {/* <button className="bg-red-500 text-white rounded-full px-4 py-2">
                                    Portfolio
                                </button> */}

                            </div>
                        </ul>
                        <ul className="md:px-12 md:py-6 flex md:text-red-500 md:text-2xl">
                            <li className="px-1">
                                <Link to="https://facebook.com/hmzabilal13"><AiFillFacebook /></Link>
                            </li>
                            <li className="px-1">
                                <Link to="https://linkedin.com/in/hamzabilal13"><AiFillLinkedin /></Link>
                            </li>
                            <li className="px-1">
                                <Link to="https://wa.me/923105830131"><AiOutlineWhatsApp /></Link>
                            </li>
                        </ul>

                    </div>
                </div>

            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Home />}>Home</Route>
                    <Route path="/Testimonial" element={<Webprojects />}>Projects</Route>
                    <Route path="/About" element={<About />}>About</Route>
                    <Route path="/Contact" element={<Contact />}>Contact</Route>

                </Routes>
            </div>
        </div>
    )
}

export default ExtraNavbar



