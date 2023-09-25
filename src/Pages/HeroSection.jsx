import React from 'react'
import '../index.css'


const HeroSection = () => {
    return (
        <div className="w-full lg:py-[100px] lg:px-[200px] md:py-[50px] md:px-[80px] md:flex md:justify-between h-auto sm:h-auto py-[170px] items-center gradient_background">
            <div className="">
                <div className="grid grid-rows-3 justify-center md:items-start text-center md:text-left items-center">
                    <h6 className="text-1xl font-light text-white">
                        I'm Hamza Bilal
                    </h6>

                    <h1 className="text-center md:text-left text-xl md:text-3xl font-semibold text-PrimaryYellow py-2">
                        A Reactjs Developer
                    </h1>
                    <h1 className="text-center md:text-left text-xl md:text-3xl font-semibold text-white">
                        & UI/UX Designer
                    </h1>
                </div>
                <div className="py-8 flex justify-center items-center md:justify-start md:items-start">
                    <a href="https://www.behance.net/hamzabilal13" className="px-12 py-2 md:px-8 md:py-2 border-2 border-PrimaryYellow text-white font-semibold rounded-full">
                        <button className="md:text-[14px]">See Portfolio</button>
                    </a>
                </div>
            </div>
            <div className="flex justify-center items-center pt-10">
                <div>
                    <img src="/img/hamza.jpg" alt="hamza" className="rounded-[60px] md:rounded-[60px] h-[250px] w-[250px]  md:h-[300px] md:w-[300px] border-4 border-PrimaryYellow" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
