import { useScreenContext } from "../contexts/ScreenSize"
export const About = ()=>{
    const {isSmallScreen} = useScreenContext();
    return(
        <div className="about">
            <h1>About Me</h1>
            <div className="imgTxtWrapper">
            <img id="aboutImg" src={isSmallScreen?"/images/about-sm1.jpg":"/images/about.jpg"} />
            <p>
                ipsum dolor sit amet, consectetur adipisicing elit.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                ipsum dolor sit amet, consectetur adipisicing elit.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.

            </p>
            </div>
        </div>
    )
}