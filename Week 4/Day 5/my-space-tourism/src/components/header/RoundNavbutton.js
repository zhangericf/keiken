import { useState } from 'react';
import './RoundNavbutton.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function RoundNavbutton({name, path, isActive, active}) {
    let currentCrewMate = path.toLowerCase().split("/")[2];

    return(
        <div>
            <Link to={path} onClick={() => isActive(path.toLowerCase().split("/")[2])}><div className={active.includes(currentCrewMate) ? "roundButton roundActive" : "roundButton"} /></Link>
        </div>
    )
}

export default RoundNavbutton;