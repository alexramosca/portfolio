import { useScreenContext } from '../contexts/ScreenSize';
export const Footer = ()=>{
    const {isPortraitScreen} = useScreenContext()
    return(
        <div id="contact" className={isPortraitScreen?"footer footer-sm":"footer" }>
            
            <div className="contactInfo">
            <p>Contact me:</p>
                <div className='phoneDiv'>
                    
                    <img src='./icons/phone.png'/>
                    <p>+1 (506)897-5858</p>
                </div>
                
                <div className='emailDiv'>
                    
                    <img src='./icons/email.png'/>
                    <a href="mailto:fcn_alexandre@hotmail.com"><p>fcn_alenxadre@hotmail.com</p></a>
                </div>
            </div>
                
            
            <div className="socialRow">
                <a href='https://www.linkedin.com/in/alexandre-ramos-202675283/' target='new'><img src='/icons/linkedin.png' /></a>
                <a href='https://github.com/alexramosca' target='new'>  <img src='/icons/github.png' /></a>
            </div>
            
        </div>
    )
}