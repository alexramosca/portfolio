import { IconRow } from "./IconRow"
export const Main = ()=>{
    return(
        <div className="main">
            
            <img src="/images/profile.png" />
           
                <div className="infoWrapper">
                    <div>
                    <p>Hi, I am</p>
                    <h1>Alexandre Ramos</h1>
                    <h3>Full Stack Developer</h3>
                    </div>
                
                
            <div className="buttonsWrapper">
                <button className="button">Download CV</button>
                <button className="button">Contact</button>
            </div>
            
            <IconRow />
            </div>         
            

        </div>
    )
}