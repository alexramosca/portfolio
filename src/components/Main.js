import { IconRow } from "./IconRow"
export const Main = ()=>{
    return(
        <div id="home" className="main">
            
            <img src="/images/profile-md.png" />
           
                <div className="infoWrapper">
                    <div>
                    <p>Hi, I am</p>
                    <h1>Alexandre Ramos</h1>
                    <h3>Full Stack Developer</h3>
                    </div>
                
                
            <div className="buttonsWrapper">
                <a href="/downloads/resumeA.pdf" target="new"><button className="button">Download CV</button></a>
                <a href="mailto:fcn_alexandre@hotmail.com"><button className="button">Contact</button></a>
            </div>
            
            <IconRow />
            </div>         
            

        </div>
    )
}