import './Header.css';
import logo from '../../assets/shared/logo.svg'
import Navbar from './Navbar';

function Header() {
    const navInfos = [
        { number:"00", name:"Home", path:"/" },
        { number:"01", name:"Destination", path:"/destination" },
        { number:"02", name:"Crew", path:"/crew" },
        { number:"03", name:"Technology", path:"/technology" },
    ];
    return(
        <div className='header'>
            <img className='logo' src={logo} alt='logo'/>
            <hr></hr>
            <div className='navBox'>
                <div className='navBar'>
                    <Navbar nav={navInfos} />
                </div>
            </div>
        </div>
    )
}

export default Header;