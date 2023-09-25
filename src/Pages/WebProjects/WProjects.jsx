import React from 'react';

function ProjectCard(props) {
  return (
    <div className=" max-w-sm rounded-lg overflow-hidden shadow-md m-4 ">
      <img src={props.imageSrc} alt={props.projectName} className="w-full hover:scale-105 hover:duration-1000" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.projectName}</div>
        <p className="text-gray-700 text-base">{props.description}</p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-PrimaryYellow hover:bg-PrimaryYellow text-BgDark font-bold md:py-2 md:px-4 w-[100%] py-3 rounded-full">
          <a href={props.link}>See Details</a>
        </button>
      </div>
    </div>
  );
}

function WProjects() {
  return (
    <div className="grid px-[100px] sm:px-[150px] md:px-[50px] grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
      <ProjectCard
        imageSrc="../../img/wp1.jpg"
        projectName="GYM Website"
        description="This is the fitness app where we can offer online classes to teach you different exercises"
        link="https://hamzabilal95.netlify.app/"
      />
      <ProjectCard
        imageSrc="../../img/wp2.png"
        projectName="Wordpress Portfolio Website "
        description="My passion is to develop web pages. This is my Wordpress Portfolio Website."
        link="https://wordpresshamza1.netlify.app/"
      />
      <ProjectCard
        imageSrc="../../img/wp3.png"
        projectName="My Website"
        description="This is My Portfolio Website where you can see my latest projects and contact info"
        link="https://hamzabilal13.netlify.app/"
      />
      <ProjectCard
        imageSrc="../../img/wp1.jpg"
        projectName="GYM Website"
        description="This is the fitness app where we can offer online classes to teach you different exercises"
        link="https://hamzabilal95.netlify.app/"
      />
      <ProjectCard
        imageSrc="../../img/wp2.png"
        projectName="Wordpress Portfolio Website"
        description="My passion is to develop web pages. This is my Wordpress Portfolio Website."
        link="https://wordpresshamza1.netlify.app/"
      />
      <ProjectCard
        imageSrc="../../img/wp3.png"
        projectName="My Website"
        description="This is My Portfolio Website where you can see my latest projects and contact info"
        link="https://hamzabilal13.netlify.app/"
      />
    </div>
  );
}

export default WProjects;
