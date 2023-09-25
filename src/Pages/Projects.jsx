import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="p-12">
      <div className="md:container md:pb-4">
        <div className="">
          <h1 className="text-2xl font-medium">My Projects</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 pt-4 md:pt-2">

        <div className="bg-white border-gray-200 rounded-lg shadow  hover:border-PrimaryYellow hover:border-2">
          <div className="px-5 py-5">
            <a href="#">
              <img src="/img/p1.png" alt="image2" className="rounded-lg shadow hover:scale-105 hover:duration-1000" />
            </a>
          </div>
          <div>
            <div className="px-5 py-5 md:flex md:justify-between md:items-center text-center ">
              <div>
                <h5 className="text-xl font-semibold tracking-tight text-BgDark">Article Writing</h5>
              </div>
              <div className="pt-4 md:p-0">
                <div className="flex justify-center items-center space-x-1 bg-PrimaryYellow p-2  rounded-full">
                  <h5 className="text-[12px] text-gray-900">See Details</h5>
                  <FaArrowRight className="text-gray-900 text-[12px]" />
                </div>
              </div>
            </div>
            <div className="px-4 py-2">
              Our project aims to address the challenges associated with QR code generation and management by providing a comprehensive web-based platform. This platform will offer users an intuitive interface to create and customize QR codes for different purposes.
            </div>
          </div>
        </div>



        {/* ------------------------------------------------------------------- */}

        <div className="bg-white border-gray-200 rounded-lg shadow hover:border-PrimaryYellow hover:border-2 md:ml-4 mt-3 md:mt-0">
          <div className="px-5 py-5">
            <a href="#">
              <img src="/img/p2.png" alt="image2" className="rounded-lg shadow hover:scale-105 hover:duration-1000" />
            </a>
          </div>
          <div>
            <div className="px-5 py-5 md:flex md:justify-between md:items-center text-center">
              <div>
                <h5 className="text-xl font-semibold tracking-tight text-BgDark">QR Generator Box</h5>
              </div>
              <div className="pt-4 md:p-0">
                <div className="flex justify-center items-center space-x-1 bg-PrimaryYellow p-2 rounded-full">
                  <h5 className="text-[12px] text-gray-900">See Details</h5>
                  <FaArrowRight className="text-gray-900 text-[12px]" />
                </div>
              </div>
            </div>
            <div className="px-4 py-2">
              Our project aims to address the challenges associated with QR code generation and management by providing a comprehensive web-based platform. This platform will offer users an intuitive interface to create and customize QR codes for different purposes.
            </div>
          </div>
        </div>


        {/* ------------------------------------------------------------------- */}

        <div className=" bg-white border-gray-200 rounded-lg shadow  hover:border-PrimaryYellow hover:border-2 lg:ml-4 mt-3 md:mt-4 lg:mt-0">
          <div className="px-5 py-5">
            <a href="#">
              <img src="/img/p3.png" alt="image3" className="rounded-lg shadow hover:scale-105 hover:duration-1000" />
            </a>
          </div>
          <div>
            <div className="px-5 py-5 md:flex md:justify-between md:items-center text-center">
              <div>
                <h5 className="text-xl font-semibold tracking-tight text-bgDark">KTOVLI</h5>
              </div>
              <div className="pt-4 md:p-0">
                <div className="flex justify-center items-center space-x-1 bg-PrimaryYellow p-2 rounded-full">
                  <h5 className="text-[12px] text-gray-900">See Details</h5>
                  <FaArrowRight className="text-gray-900 text-[12px]" />
                </div>
              </div>
            </div>
            <div className="p-5">
              KTOVLI is an innovative web-based Article Writing AI Platform that streamlines the content creation process.
            </div>
          </div>
        </div>


        {/* ------------------------------------------------------------------- */}
        <div className="bg-white border-gray-200 rounded-lg shadow hover:border-PrimaryYellow hover:border-2 md:ml-4 lg:ml-0 md:mt-4 mt-3">
          <div className="px-5 py-5">
            <a href="#">
              <img src="/img/p4.png" alt="image4" className="rounded-lg shadow hover:scale-105 hover:duration-1000" />
            </a>
          </div>
          <div>
            <div className="px-5 py-5 md:flex md:justify-between md:items-center text-center">
              <div>
                <h5 className="text-xl font-semibold tracking-tight text-bgDark">RFM Loyalty</h5>
              </div>
              <div className="pt-4 md:p-0">
                <div className="flex justify-center items-center space-x-1 bg-PrimaryYellow p-2 rounded-full">
                  <h5 className="text-[12px] text-gray-900">See Details</h5>
                  <FaArrowRight className="text-gray-900 text-[12px]" />
                </div>
              </div>
            </div>
            <div className="px-5 py-4">
              RFM Loyalty related tasks and information within the RFM Loyalty app presents challenges in terms of efficiency, organization, and accessibility.
            </div>
          </div>
        </div>


        {/* ------------------------------------------------------------------- */}

        <div className="bg-white border-gray-200 rounded-lg shadow hover:border-PrimaryYellow hover:border-2 mt-3 md:mt-4 lg:ml-4">
          <div className="px-5 py-5">
            <a href="#">
              <img src="/img/p5.png" alt="image5" className="rounded-lg shadow hover:scale-105 hover:duration-1000" />
            </a>
          </div>
          <div>
            <div className="px-5 py-5 md:flex md:justify-between md:items-center text-center">
              <div>
                <h5 className="text-xl font-semibold tracking-tight text-bgDark">Finance Manager</h5>
              </div>
              <div className="pt-4 md:p-0">
                <div className="flex justify-center items-center space-x-1 bg-PrimaryYellow p-2 rounded-full">
                  <h5 className="text-[12px] text-gray-900">See Details</h5>
                  <FaArrowRight className="text-gray-900 text-[12px]" />
                </div>
              </div>
            </div>
            <div className="px-5 py-4">
              Personal Finance Manager is very helpful for managing your finances. We can add our income and expenses in this app to find or save our daily life finances.
            </div>
          </div>
        </div>


        {/* ------------------------------------------------------------------- */}

        <div className="bg-white border-gray-200 rounded-lg shadow hover:border-PrimaryYellow hover:border-2 md:mt-4 md:ml-4 mt-3">
          <div className="px-5 py-5">
            <a href="#">
              <img src="/img/p6.png" alt="image6" className="rounded-lg shadow hover:scale-105 hover:duration-1000" />
            </a>
          </div>
          <div>
            <div className="px-5 py-5 md:flex md:justify-between md:items-center text-center">
              <div>
                <h5 className="text-xl font-semibold tracking-tight text-bgDark">Budget Tracker</h5>
              </div>
              <div className="pt-4 md:p-0">
                <div className="flex justify-center items-center space-x-1 bg-PrimaryYellow p-2 rounded-full">
                  <h5 className="text-[12px] text-gray-900">See Details</h5>
                  <FaArrowRight className="text-gray-900 text-[12px]" />
                </div>
              </div>
            </div>
            <div className="px-5 py-4">
              Budget Tracker  is a user-friendly mobile application designed to help you effectively manage your finances. With its intuitive interface and powerful features, you can effortlessly track your income, expenses, and savings goals.
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------- */}

      </div>



    </div>
  )
}

export default Projects
