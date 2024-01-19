import {Project} from './Project';
import { useScreenContext } from '../contexts/ScreenSize';
import { useContext } from 'react';
export const Projects = ()=>{
    const {isPortraitScreen} = useScreenContext();
    let projects = [
        {img: "/icons/camera.png", title: "Photographer Portifolio" , link: "https://alexramosca.github.io/", 
            desc : "Portifolio designed to photographers. Technologies: JavaScript, HTML, CSS. Current Status:  being rebuilt to include more advanced features."},
        {img: "/icons/car.png", title: "UTrip" , link: "https://utrip-front-6refb10xz-alexramoscas-projects.vercel.app/",
            desc : "Full Stack application. It allows users to share trips across the country. Technologies: React, Node, sequelize. Current Status: Front-end is Online, back-end is under development. Users can log in, view trips on a database, and create their own"},
        {img: "/icons/task.png", title: "Task Management App" , link: "#",
            desc : "Elevate your productivity with our task management app. Current Status: Under Development"},
        {img: "/icons/wheather.png", title: "Weather App" , link: "#",
            desc : "Stay ahead of the weather with our user-friendly app. Current Status: Under Development"}

    ]
    return(
        <div className="projectsPage" id='projects'>
            <h4><span className='highlight'>Projects</span></h4>
            <div className={isPortraitScreen?"projectsWrapper":"projectsWrapper-md"}>
                <Project img={projects[1].img} title={projects[1].title} link={projects[1].link} desc={projects[1].desc} />
                <Project img={projects[0].img} title={projects[0].title} link={projects[0].link} desc={projects[0].desc} />
                <Project img={projects[2].img} title={projects[2].title} link={projects[2].link} desc={projects[2].desc} />
                <Project img={projects[3].img} title={projects[3].title} link={projects[3].link} desc={projects[3].desc} />

                
            </div>

        </div>
    )
}