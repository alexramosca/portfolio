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
                <img src='/icons/linkedin.png' />
                <img src='/icons/github.png' />
            </div>
            
        </div>
    )
}