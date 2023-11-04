import 'font-awesome/css/font-awesome.min.css';
import {useState, useEffect} from 'react'
import {NavLink} from './NavLink'
export const Navbar = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    useEffect(()=>{
        const handleScreenSize = ()=>{
            window.innerWidth < 768?setIsSmallScreen(true):setIsSmallScreen(false)
        }
        handleScreenSize()

        window.addEventListener('resize', handleScreenSize)
        

        return ()=>{
            window.removeEventListener('resize', handleScreenSize)
        }
    }, [])

    const handleHambClick = ()=>{
        setIsOpen(!isOpen)
        
    }
    return(
        <>
        <nav className="navbar">
            <div className="logo">Alex Ramos</div>
            {isSmallScreen && <div className='hambIcon'>
            <i  onClick={handleHambClick} className={isOpen?'fa fa-times':'fa fa-bars'}></i>
            </div>}
            
            { !isSmallScreen && 
            <NavLink class='navMdScreen'/>
        }
            
        </nav>
        {
                isOpen && isSmallScreen &&
                <NavLink class='navSmScreen'/>
            }
        
        </>
    )
}