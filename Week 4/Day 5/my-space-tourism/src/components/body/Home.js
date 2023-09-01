import './Home.css';
import DoubleColumn from './DoubleColumn';
import background from '../../assets/home/background-home.jpg';
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        document.body.style.backgroundImage = `url('${background}')`;
    }, []);
    
    const column1 = 
    <> 
        <h4>SO, YOU WANT TO TRAVEL TO</h4>
        <h1>SPACE</h1>
        <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
    </>;
    const column2 = 
    <>
        <div className='m-left-auto'>
            <div className='centered-circle' style={{color:"#000000"}}>
                EXPLORE
            </div>
        </div>
    </>;

    return (
        <div className='homeBackground'>
            <DoubleColumn column1={column1} column2={column2}/>
        </div>
    );
}
