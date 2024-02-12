import {Project} from './Project';
import { useScreenContext } from '../contexts/ScreenSize';
export const Projects = ()=>{
    const {isPortraitScreen} = useScreenContext();
    let projects = [
        { 
            img: "/icons/car.png", 
            title: "UTrip", 
            link: "https://utrip-front.vercel.app/",
            desc: "Full stack application that allows users to share trips across the country. Technologies used include React, Node.js, and Sequelize. The front-end is online, and back-end development is in progress. Users can log in, view trips in a database, and create their own." 
        },
        { 
            img: "/icons/museum.png", 
            title: "Museum Transcript System", 
            link: "https://transcribe.frederictonregionmuseum.com/",
            desc: "This is a real-world project aimed at improving the transcription system for the Fredericton Region Museum. Technologies include JavaScript, PHP, Ajax, HTML, and Bootstrap. Currently under development, addressing transcription system enhancement." 
        },
        { 
            img: "/icons/bank.png", 
            title: "HooBank", 
            link: "https://hoobankbusiness.vercel.app/",
            desc: "Front-end project showcasing skills in creating beautiful and functional websites. HooBank is a fictional bank website built with React and Tailwind CSS. Currently under development, focusing on UI/UX enhancements and feature implementation." 
        },
        { 
            img: "/icons/task.png", 
            title: "Task Management App", 
            link: "#",
            desc: "Back-end application providing a REST API for task management. Built with Node.js, Sequelize, and optimized database design. Currently in the development phase, focusing on REST API implementation and database management features." 
        }
    ];
    

    
    return(
        <div className="projectsPage" id='projects'>
            <h4><span className='highlight'>Projects</span></h4>
            <div className={isPortraitScreen?"projectsWrapper":"projectsWrapper-md"}>
                
                {projects.map((project, index)=>
                    <Project key={index} img={project.img} title={project.title} link= {project.link} desc={project.desc}/>
                )}

                
            </div>

        </div>
    )
}