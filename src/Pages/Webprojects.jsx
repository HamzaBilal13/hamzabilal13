import React from 'react'
import '../index.css'
import WProjects from './WebProjects/WProjects'



const Webprojects = () => {
  return (
    <div className="w-full h-auto">
      <div className="md:px-12 md:py-[100px] py-[100px]">
        <h1 className="p-5 text-center text-3xl font-medium">List of My Projects</h1>
        <WProjects />
      </div>
    </div>
  )
}

export default Webprojects
