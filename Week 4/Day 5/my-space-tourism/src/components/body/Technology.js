import { useEffect } from "react";
import background from '../../assets/technology/background-technology-desktop.jpg';

export default function Technology() {
    useEffect(() => {
        document.body.style.backgroundImage = `url('${background}')`;
    }, []);

    return (
        <>
            <h4>SO, YOU WANT TO TRAVEL TO</h4>
            <h1>SPACE</h1>
            <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            <div>
                EXPLORE
            </div>
        </>
    );
}