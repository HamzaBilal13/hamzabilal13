import React from 'react'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Webprojects from '../Pages/Webprojects'
import { Routes, Route, Link } from 'react-router-dom'
import { AiOutlineDownload } from "react-icons/ai";
import { HiMenu, HiX } from "react-icons/hi";
import '../index.css';

import { useState } from 'react'

const Navbar = () => {

    const [showNav, setShowNav] = useState(false);
    const toggleNav = () => {
        setShowNav(!showNav);
    };

    const closeNav = () => {
        setShowNav(false);
    };


    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };
    return (
        <div>
            <div className="w-full fixed nav_gradient z-[999]">
                <div className="shadow-sm">
                    <div className="sm:block md:hidden p-2">
                        <div className="sm:block xs:block md:hidden lg:hidden">
                            <div className="container-fluid mx-4 p-4">
                                <div className="flex justify-between">
                                    <div className="py-2">
                                        <h1 className="text-1xl">
                                            <span className="text-PrimaryYellow font-semibold">Hamza </span>
                                            <span className="text-white font-normal">Bilal</span>
                                        </h1>
                                    </div>
                                    <div>
                                        <button onClick={toggleNav} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:border-white focus:outline-none focus:ring-2 ring-2 ring-white focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                                            {showNav ? <HiX className="text-xl text-white" /> : <HiMenu className="text-xl text-white" />}

                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {showNav && (
                            <div>
                                <ul className="md:px-4 md:py-6 text-white">
                                    <div className="justify-center">


                                        <li className="text-center py-3">
                                            <Link onClick={closeNav} className="hover:text-PrimaryYellow hover:font-semibold hover:border-b-[1px] hover:border-PrimaryYellow focus:font-semibold focus:text-PrimaryYellow focus:border-PrimaryYellow focus:border-b-[1px] md:px-4 lg:px-8 md:py-2" to="/">Home</Link>
                                        </li>
                                        <li className="text-center py-3">
                                            <Link onClick={closeNav} className="hover:text-PrimaryYellow border-PrimaryYellow hover:font-semibold hover:border-b-[1px] hover:border-PrimaryYellow focus:font-semibold focus:text-PrimaryYellow focus:border-PrimaryYellow focus:border-b-[1px] md:px-4 lg:px-8 md:py-2" to="/Webprojects">Projects</Link>
                                        </li>
                                        <li className="text-center py-3">
                                            <Link onClick={closeNav} className="hover:text-PrimaryYellow hover:font-semibold border-PrimaryYellow hover:border-b-[1px] hover:border-PrimaryYellow focus:font-semibold focus:text-PrimaryYellow focus:border-PrimaryYellow focus:border-b-[1px] md:px-4 lg:px-8 md:py-2" to="/About">About</Link>
                                        </li>
                                        <li className="text-center py-3">
                                            <Link onClick={closeNav} className="hover:text-PrimaryYellow hover:font-semibold border-PrimaryYellow hover:border-b-[1px] hover:border-PrimaryYellow focus:font-semibold focus:text-PrimaryYellow focus:border-PrimaryYellow focus:border-b-[1px] md:px-4 lg:px-8 md:py-2" to="/Contact">Contact</Link>
                                        </li>
                                    </div>


                                </ul>
                                <ul>
                                    <li className="flex justify-center py-5">

                                        <a href="/CV/CV.pdf" className="w-[50%] sm:w-[35%] bg-[rgba(251,255,2,0.95)] hover:bg-PrimaryYellow text-[#1C1C1E] font-semibold rounded-full px-4 py-2 flex justify-center" download>
                                            <AiOutlineDownload className="text-2xl mr-1" />
                                            <button className="md:text-[14px]">Download CV</button>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        )}

                    </div>

                    {/* ---------------------------Web Navbar------------------------------ */}

                    <div className="hidden md:flex justify-between nav_gradient">
                        <ul className="md:py-8 md:px-6 lg:px-12 lg:py-7">
                            <h4 className="md:text-[18px] lg:text-2xl">
                                <h1 className="font-bold text-1xl">
                                    <span className="text-PrimaryYellow font-semibold">Hamza </span>
                                    <span className="text-white font-normal">Bilal</span>
                                </h1>

                            </h4>
                        </ul>
                        <ul className="md:px-4 md:py-6 text-white">

                            <div className="md:flex md:justify-center">

                                <li className="md:py-2 hover:text-PrimaryYellow hover:font-semibold hover:border-b-[1px] hover:border-PrimaryYellow ">
                                    <Link  className="focus:font-semibold focus:text-PrimaryYellow focus:border-PrimaryYellow focus:border-b-[1px] md:px-4 lg:px-8 md:py-2" to="/">Home</Link>
                                </li>
                                <li className="md:py-2 hover:text-PrimaryYellow border-PrimaryYellow hover:font-semibold hover:border-b-[1px] hover:border-PrimaryYellow">
                                    <Link  className="focus:font-semibold focus:text-PrimaryYellow focus:border-PrimaryYellow focus:border-b-[1px] md:px-4 lg:px-8 md:py-2" to="/Webprojects">Projects</Link>
                                </li>
                                <li className="md:py-2 focus:text-PrimaryYellow focus:border-PrimaryYellow focus:border-b-[1px] hover:text-PrimaryYellow hover:font-semibold border-PrimaryYellow hover:border-b-[1px] hover:border-PrimaryYellow">
                                    <Link  className="focus:font-semibold focus:text-PrimaryYellow focus:border-PrimaryYellow focus:border-b-[1px] md:px-4 lg:px-8 md:py-2" to="/About">About</Link>
                                </li>
                                <li className="md:py-2 focus:text-PrimaryYellow focus:border-PrimaryYellow focus:border-b-[1px] hover:text-PrimaryYellow hover:font-semibold border-PrimaryYellow hover:border-b-[1px] hover:border-PrimaryYellow">
                                    <Link  className="focus:font-semibold focus:text-PrimaryYellow focus:border-PrimaryYellow focus:border-b-[1px] md:px-4 lg:px-8 md:py-2" to="/Contact">Contact</Link>
                                </li>


                            </div>
                        </ul>
                        <ul className="md:px-4 lg:px-10 md:py-6">
                            <a href="/CV/CV.pdf" className="bg-[rgba(251,255,2,0.95)] hover:bg-PrimaryYellow text-[#1C1C1E] font-semibold rounded-full px-4 py-2 flex justify-center" download>
                                <AiOutlineDownload className="text-2xl mr-1" />
                                <button className="md:text-[14px]">Download CV</button>
                            </a>

                        </ul>


                    </div>
                </div>

            </div>
            <div>
                <Routes>

                    <Route path="/" element={<Home />}>Home</Route>
                    <Route path="/Webprojects" element={<Webprojects />}>Projects</Route>
                    <Route path="/About" element={<About />}>About</Route>
                    <Route path="/Contact" element={<Contact />}>Contact</Route>

                </Routes>
            </div>
        </div>
    )
}

export default Navbar



