import { useScreenContext } from '../contexts/ScreenSize';
export const Project = (props)=>{
    const {isPortraitScreen} = useScreenContext()
    return (
        <div className={isPortraitScreen?"project":"project-md"}>
            <img src = {props.img} />
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <button className="projectCardButton">Read more</button>
        </div>
    )
}