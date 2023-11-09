import {motion} from 'framer-motion'
export const NavLink = (props)=>{
    return(
        <motion.ul
             initial={{opacity: 0}} 
             animate={{opacity: 100}} 
             transition={{duration: 0.5}}
            className={props.class}>
            <li className="navLink">Home</li>
            <li className="navLink">About</li>
            <li className="navLink">Projects</li>
            <li className="navLink">Contact</li>
            </motion.ul>
    )
}