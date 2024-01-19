import { useScreenContext } from '../contexts/ScreenSize';
export const Project = (props)=>{
    const {isPortraitScreen} = useScreenContext()
    return (
        <a className="cardLink" href={props.link} target='new'>
        <div className={isPortraitScreen?"proj project":"proj project-md"}>
            <img src = {props.img} />
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <button className="projectCardButton">Access</button>
        </div>
        </a>
    )
}