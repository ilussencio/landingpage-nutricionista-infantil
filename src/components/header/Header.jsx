import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
import sabrinaLogo from '../../assets/sabrina_logo.png'

export default function Header() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    return (
        <header>
            <div className='header'>
                <nav className='navbar'>
                    <Link to="chamada" className='logo'>
                        <img src={sabrinaLogo} alt='logo' />
                    </Link>
                    <div className='hamburger' onClick={handleClick}>
                        {click ? (<FaTimes size={30} style={{ color: '#A95D4A' }} />)
                            : (<FaBars size={30} style={{ color: '#A95D4A' }} />)}
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className='nav-item'>
                            <Link to="possoajudar" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Posso te ajudar?</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="especialidades" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Especialidades</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="alertas" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Alertas</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="quemSou" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Quem sou</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="instafeed" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Instagram</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="depoimentos" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Depoimentos</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="perguntas" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Perguntas</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="formulario" spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu}>Contato</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}