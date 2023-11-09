import {Project} from './Project';
import { useScreenContext } from '../contexts/ScreenSize';
import { useContext } from 'react';
export const Projects = ()=>{
    const {isPortraitScreen} = useScreenContext();
    let projects = [
        {img: "#", title: "Project 1" , desc : "Hello this is my first project testing"},
        {img: "#", title: "Project 2" , desc : "Hello this is my Second project"},
        {img: "#", title: "Project 3" , desc : "Hello this is my Third project"},
        {img: "#", title: "Project 4" , desc : "Hello this is my Fourth project"}

    ]
    return(
        <div className="projectsPage">
            <h1>Projects</h1>
            <div className={isPortraitScreen?"projectsWrapper":"projectsWrapper-md"}>
                <Project img={projects[0].img} title={projects[0].title} desc={projects[0].desc} />
                <Project img={projects[1].img} title={projects[1].title} desc={projects[1].desc} />
                <Project img={projects[2].img} title={projects[2].title} desc={projects[2].desc} />
                <Project img={projects[3].img} title={projects[3].title} desc={projects[3].desc} />

                
            </div>

        </div>
    )
}