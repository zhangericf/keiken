import './Navbutton.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Navbutton({name, number, path, isActive, active}) {
    return(
        <div className={active.includes(name.toLowerCase()) ? "active" : "navbutton"}>
            <Link to={path} onClick={() => isActive(name.toLowerCase())}>
                <label><b>{number ? number : ""}</b> {name}</label>
            </Link>
        </div>
    )
}

export default Navbutton;