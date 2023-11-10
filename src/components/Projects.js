import {Project} from './Project';
import { useScreenContext } from '../contexts/ScreenSize';
import { useContext } from 'react';
export const Projects = ()=>{
    const {isPortraitScreen} = useScreenContext();
    let projects = [
        {img: "/icons/camera.png", title: "Photographer Portifolio" , link: "https://alexramosca.github.io/", desc : "Discover a visual journey through our portfolio, where we bring moments to life through the lens of a passionate photographer. Explore captivating imagery, find inspiration, and connect with us to make your story our next masterpiece."},
        {img: "/icons/car.png", title: "Trip Shared App" , desc : "Embark on a digital adventure with our travel sharing platform. Share your journeys, connect with fellow travelers, and inspire the explorer within you. Your next great adventure begins here."},
        {img: "/icons/task.png", title: "Task Management App" , desc : "Elevate your productivity with our task management app. Streamline your workflow, stay organized, and accomplish more in less time. Your key to efficient and stress-free task management."},
        {img: "/icons/wheather.png", title: "Weather App" , desc : "Stay ahead of the weather with our user-friendly app. Get real-time updates, forecasts, and personalized weather data. Your pocket meteorologist for a safer and more informed day."}

    ]
    return(
        <div className="projectsPage" id='projects'>
            <h4><span className='highlight'>Projects</span></h4>
            <div className={isPortraitScreen?"projectsWrapper":"projectsWrapper-md"}>
                <Project img={projects[0].img} title={projects[0].title} link={projects[0].link} desc={projects[0].desc} />
                <Project img={projects[1].img} title={projects[1].title} desc={projects[1].desc} />
                <Project img={projects[2].img} title={projects[2].title} desc={projects[2].desc} />
                <Project img={projects[3].img} title={projects[3].title} desc={projects[3].desc} />

                
            </div>

        </div>
    )
}