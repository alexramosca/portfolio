import {motion} from 'framer-motion'
import {Link} from 'react-scroll'

export const NavLink = (props)=>{
    return(
        <motion.ul
             initial={{opacity: 0}} 
             animate={{opacity: 100}} 
             transition={{duration: 0.5}}
            className={props.class}>
            <li className="navLink">
                <Link to='home' smooth duration={200}>Home</Link>
            </li>
            <li className="navLink">
            <Link to="about" smooth duration={500} >About</Link></li>
            <li className="navLink">
            <Link to="projects" smooth duration={500} offset={90}>Projects</Link>
                
            </li>
            <li className="navLink">

                <Link to="contact" smooth={true} duration={500}> Contact</Link>
                </li>
            </motion.ul>
    )
}