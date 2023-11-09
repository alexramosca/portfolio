import 'font-awesome/css/font-awesome.min.css';
import { useScreenContext } from '../contexts/ScreenSize';
import {useState, useEffect} from 'react'
import {NavLink} from './NavLink'
export const Navbar = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    const {isPortraitScreen} = useScreenContext();
    console.log(isPortraitScreen)


    const handleHambClick = ()=>{
        setIsOpen(!isOpen)
        
    }
    return(
        <>
        <nav className="navbar">
            <div className="logo">Alex Ramos</div>
            {isPortraitScreen && <div className='hambIcon'>
            <i  onClick={handleHambClick} className={isOpen?'fa fa-times':'fa fa-bars'}></i>
            </div>}
            
            { !isPortraitScreen && 
            <NavLink class='navMdScreen'/>
        }
            
        </nav>
        {
                isOpen && isPortraitScreen &&
                <NavLink class='navSmScreen'/>
            }
        
        </>
    )
}