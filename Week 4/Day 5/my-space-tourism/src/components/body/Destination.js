import './Destination.css';
import Navbutton from '../header/Navbutton';
import { useEffect, useState } from 'react';
import DoubleColumn from './DoubleColumn';
import planetInfoFromFile from '../../data/platnetInfos.json';
import background from '../../assets/destination/background-destination-desktop.jpg';
import moon from '../../assets/destination/image-moon.png'
import mars from '../../assets/destination/image-mars.png'
import europa from '../../assets/destination/image-europa.png'
import titan from '../../assets/destination/image-titan.png'

export default function Destination() {
    useEffect(() => {
        document.body.style.backgroundImage = `url('${background}')`;
    }, []);

    const pictures = { moon: moon, mars: mars, europa: europa, titan:titan }
    
    const navInfos = [
        { name:"Moon", path:"/destination/moon" },
        { name:"Mars", path:"/destination/mars" },
        { name:"Europa", path:"/destination/europa" },
        { name:"Titan", path:"/destination/titan" },
    ];

    const planetInfos = planetInfoFromFile;

    const currentPath = window.location.pathname.replace("/", "").split("/")[1] ? window.location.pathname.replace("/", "").split("/")[1] : "moon";
    const [active,setActive] = useState(currentPath)

    const column1 = 
    <> 
        <h3>01 Pick your destination</h3>
        <img className='planet' src={pictures[active]} alt='planet' />
    </>;
    const column2 = 
    <>
        <div className='d-flex'>
            {navInfos.map((info, index) => 
                {
                    return <Navbutton key={index} isActive={setActive} active={active} name={info.name} path={info.path} />
                }
            )}
        </div>
        <h1>{active.toUpperCase()}</h1>
        <p>{planetInfos[active].text}</p>
        <div className='d-flex'>
            <div>
                <h4>AVG. DISTANCE</h4>
                <h3>{planetInfos[active].distance}</h3>
            </div>
            <div>
                <h4>Est. Travel Time</h4>
                <h3>{planetInfos[active].travelTime}</h3>
            </div>
        </div>
    </>;


    return (
        <div >
            <DoubleColumn column1={column1} column2={column2}/>
        </div>
    );
}