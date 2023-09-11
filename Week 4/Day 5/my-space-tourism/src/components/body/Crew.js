import './Crew.css';
import { useEffect, useState } from 'react';
import DoubleColumn from './DoubleColumn';
import crewInfoFromFile from '../../data/crewInfos.json';
import RoundNavbutton from '../header/RoundNavbutton';
import background from '../../assets/crew/background-crew-desktop.jpg';
import douglas from '../../assets/crew/image-douglas-hurley.png'
import anousheh from '../../assets/crew/image-anousheh-ansari.png'
import mark from '../../assets/crew/image-mark-shuttleworth.png'
import victor from '../../assets/crew/image-victor-glover.png'

export default function Crew() {
    useEffect(() => {
        document.body.style.backgroundImage = `url('${background}')`;
    }, []);

    const pictures = { "douglas-hurley": douglas, "mark-shuttleworth": mark, "anousheh-ansari": anousheh, "victor-glover":victor }

    const navInfos = [
        { name:"Douglas Hurley", path:"/crew/douglas-hurley" },
        { name:"Mark Shuttleworth", path:"/crew/mark-shuttleworth" },
        { name:"Victor Glover", path:"/crew/victor-glover" },
        { name:"Anousheh Ansari", path:"/crew/anousheh-ansari" },
    ];

    const crewInfos = crewInfoFromFile;

    const currentPath = window.location.pathname.replace("/", "").split("/")[1] ? window.location.pathname.replace("/", "").split("/")[1] : "douglas-hurley";
    const [active,setActive] = useState(currentPath)
    console.log(active);
    const column1 = 
    <>
        <h3>02 Meet your crew</h3>
        <h3>{crewInfos[active].title}</h3>
        <h1>{active.toUpperCase().replace("-", " ")}</h1>
        <p>{crewInfos[active].text}</p>
        <div className='d-flex'>
            {navInfos.map((info, index) => 
                {
                    return <RoundNavbutton key={index} isActive={setActive} active={active} name={info.name} path={info.path} />
                }
            )}
        </div>
    </>;

    const column2 = 
    <> 
        <img className='crewPicture' src={pictures[active]} alt='planet' />
    </>;

    return (
        <div>
            <DoubleColumn column1={column1} column2={column2}/>
        </div>
    );
}