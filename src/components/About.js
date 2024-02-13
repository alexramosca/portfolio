import { useScreenContext } from "../contexts/ScreenSize"
import {motion} from "framer-motion"
export const About = ()=>{
    const {isPortraitScreen} = useScreenContext();
    return(
        <motion.div
        
         className="about" id="about">
            <div className="imgTxtWrapper">
            <img id="aboutImg" src={isPortraitScreen?"/images/about-sm1.png":"/images/about.png"} />
            
            <div className="aboutTxt">
            <h4 ><span className="highlight">About me</span></h4>
            <h2>More than 5 years in the Technology field</h2>
            <p>
                
            Hello! I'm Alexandre Ramos, a passionate web developer with a diverse background in education and technology. My journey into the world of coding has been exciting, fueled by my love for teaching and programming. For over six years, I had the incredible opportunity to inspire and guide the next generation of tech enthusiasts as a technology teacher. Working with kids was rewarding and an invaluable experience that allowed me to develop effective communication and problem-solving skills. I witnessed the power of technology in sparking young minds' curiosity and creativity, which ignited my passion for the field.
            <br />As a current student in a Programmer Analyst course, I am immersed in an environment where I can enhance my programming skills and delve deeper into the intricate development world. My teaching background has instilled in me the importance of clarity and effective communication, skills that I eagerly apply to my work as a developer.
            <br />I'm eager to connect and collaborate with like-minded professionals who share my enthusiasm for technology and innovation. If you're interested in discussing potential projects, sharing ideas, or exploring how my skills can benefit your company, please get in touch with me.
            <br />Let's embark on this coding journey and create impactful, technology-driven solutions!

            </p>
            </div>
            </div>
        </motion.div>
    )
}