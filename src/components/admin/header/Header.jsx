import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
import sabrinaLogo from '../../../assets/sabrina_logo.png'

export default function Header({active}) {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    function logout(){
        localStorage.removeItem('operation_token');
        localStorage.removeItem('refresh_token');
        window.location.href ='/'
    }

    return (
        <header className='admin-header'>
            <div className='header '>
                <nav className='navbar'>
                    <Link to="chamada" className='logo'>
                        <img src={sabrinaLogo} alt='logo' />
                    </Link>
                    <div className='hamburger' onClick={handleClick}>
                        {click ? (<FaTimes size={30} style={{ color: '#fff' }} />)
                            : (<FaBars size={30} style={{ color: '#fff' }} />)}
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        
                        <li className='nav-item'>
                            <a className={active === "leads"?"nav-link active":"nav-link"} href="/leads">Leads</a>
                        </li>
                        <li className='nav-item'>
                            <a className={active === "campanha"?"nav-link active":"nav-link"} href="/campanha">Campanha</a>
                        </li>

                        <li className='nav-item'>
                            <button className="btn btn-danger" onClick={() => {logout()}}>Sair</button>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    )
}