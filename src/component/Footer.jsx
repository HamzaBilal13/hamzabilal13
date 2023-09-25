import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillFacebook, AiFillLinkedin, AiOutlineWhatsApp } from "react-icons/ai";
import '../index.css';


const Footer = () => {
    return (
        <div className="bg-NavBg px-10 py-5 nav_gradient">
            <div className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 py-[50px]">
                <div className="col-span-1 p-6">
                    <div className="flex justify-center items-center md:block md:items-start">
                       
                        <h4 className="md:text-[18px] lg:text-2xl text-1xl ">
                            <span className="text-PrimaryYellow font-semibold">Hamza </span>
                            <span className="text-white font-normal">Bilal</span>
                        </h4>
                    </div>
                    <div className="text-white mt-5">
                        <h6 className="py-2">
                            <p className="flex text-center md:text-left justify-center items-center md:block md:items-start">I am a Reactjs Developer Passion to work in a Web Technology</p>
                            <p className="font-semibold underline pt-3 flex justify-center items-center md:block md:items-start">My Skills are:</p>
                        </h6>
                        <h6>
                            <p className="flex text-center md:text-left justify-center items-center md:block md:items-start">HTML, CSS, Bootstrap, TailwindCSS, Javascript</p>

                        </h6>
                    </div>
                </div>
                <div className="text-white px-6 lg:px-12 md:px-[100px] py-6">
                    <div className="text-2xl font-semibold flex justify-center items-center md:block md:items-start">
                        Links
                    </div>
                    <div className="mt-5">
                        <li className="py-2 list-none">
                            <Link className="flex justify-center items-center md:block md:items-start" to="/">Home</Link>
                        </li>
                        <li className="py-2 list-none">
                            <Link className="flex justify-center items-center md:block md:items-start" to="/Testimonial">Testimonial</Link>
                        </li>
                        <li className="py-2 list-none">
                            <Link className="flex justify-center items-center md:block md:items-start" to="/About">About</Link>
                        </li>
                        <li className="py-2 list-none">
                            <Link className="flex justify-center items-center md:block md:items-start" to="/Contact">Contact</Link>
                        </li>
                    </div>
                </div>

                <div className="text-white p-6">
                    <div className="text-2xl font-semibold flex justify-center items-center md:block md:items-start">
                        Other Links
                    </div>
                    <div className="mt-5">
                        <li className="py-2 underline list-none">
                            <Link className="flex justify-center items-center md:block md:items-start" to="https://wordpresshamza1.netlify.app/">Wordpress Portfolio</Link>
                        </li>
                        <li className="py-2 underline list-none">
                            <Link className="flex justify-center items-center md:block md:items-start" to="https://hamzabilal13.netlify.app/">ReactJs Portfolio</Link>
                        </li>
                        <li className="py-2 underline list-none">
                            <Link className="flex justify-center items-center md:block md:items-start" to="https://www.behance.net/hamzabilal13">UI UX Portfolio</Link>
                        </li>

                    </div>
                </div>

                <div className="text-white p-6 lg:px-1 md:px-[100px]">
                    <div className="text-2xl font-semibold flex justify-center items-center md:block md:items-start">
                        Social Links
                    </div>
                    <div className="mt-5">
                        <ul className="flex justify-center items-center md:justify-start md:items-start md:text-white md:text-2xl ">
                            <li className="px-1 hover:text-[#FAFF02]">
                                <Link to="https://facebook.com/hmzabilal13"><AiFillFacebook /></Link>
                            </li>
                            <li className="px-1 hover:text-[#FAFF02]">
                                <Link to="https://linkedin.com/in/hamzabilal13"><AiFillLinkedin /></Link>
                            </li>
                            <li className="px-1 hover:text-[#FAFF02]">
                                <Link to="https://wa.me/923105830131"><AiOutlineWhatsApp /></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="text-1xl pt-6">
                        <div className="underline font-medium flex justify-center items-center md:block md:items-start">
                            Contact Info
                        </div>
                        <div className="text-white">
                            <div className="py-2">
                                <h6 className="flex justify-center items-center md:block md:items-start">
                                    hamza13aug1995@gmail.com
                                </h6>
                                <h6 className="flex justify-center items-center md:block md:items-start">
                                    +92 3105830131
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
