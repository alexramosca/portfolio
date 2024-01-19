
import { useScreenContext } from '../contexts/ScreenSize';
import {useState, useEffect} from 'react'
import {NavLink} from './NavLink'
export const Navbar = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    const {isPortraitScreen} = useScreenContext();
    


    const handleHambClick = ()=>{
        setIsOpen(!isOpen)
        
    }
    return(
        <>
        <nav className="navbar">
            <div className="logo">&#123; Alex Ramos/ &#125;</div>
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