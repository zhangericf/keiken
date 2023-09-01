import './Navbar.css';
import logo from '../../assets/shared/logo.svg'
import Navbutton from './Navbutton';
import { useState } from 'react';

export default function Navbar({nav}) {
    const currentPath = window.location.pathname.replace("/", "");
    const [active,setActive] = useState(currentPath)

    return(
        nav.map((info, index) => 
            {
                return <Navbutton key={index} isActive={setActive} active={active} name={info.name} number={info.number} path={info.path} />
            }
        )
    )
}
