import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './style.css';

const Navbar = () => {
    const [icon,setIcon]= useState(false)
    const handleClick =()=>{
        setIcon(!icon)
    }
    const closeSideDrawer =()=>{
        setIcon(false)
    }
    return (
        <nav className='navbar container'>
            <ul>
                <Link to='/' className='nav-logo' onClick={closeSideDrawer}>
                    <img src={''} alt='Loading..' className='logo' />
                </Link>
                {/* <div className='menu-icon' onClick={handleClick}>
                    {
                        icon ? <FaTimes className='fa-times'>
                        </FaTimes> : <FaBars className='
                 fa-bars'></FaBars>
                    }

                </div> */}

            </ul>
            <ul className={icon ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/' className='nav-links' onClick={closeSideDrawer}>
                        Home</Link>
                </li>
                <li>
                    <Link to='/Service' className='nav-links' onClick={closeSideDrawer}> Service</Link>
                </li>
                <li>
                    <Link to='/About' className='nav-links' onClick={closeSideDrawer}>About Us</Link>
                </li>
                <li>
                    <Link to='/Contact' className='nav-links' onClick={closeSideDrawer}> Contact US</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
