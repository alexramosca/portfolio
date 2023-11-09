import { useScreenContext } from "../contexts/ScreenSize"
import {motion} from "framer-motion"
export const About = ()=>{
    const {isPortraitScreen} = useScreenContext();
    return(
        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 2}}
        viewport={{ once: false }}
         className="about">
            <h1>About Me</h1>
            <div className="imgTxtWrapper">
            <img id="aboutImg" src={isPortraitScreen?"/images/about-sm1.jpg":"/images/about.jpg"} />
            <p>
                ipsum dolor sit amet, consectetur adipisicing elit.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                ipsum dolor sit amet, consectetur adipisicing elit.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.

            </p>
            </div>
        </motion.div>
    )
}