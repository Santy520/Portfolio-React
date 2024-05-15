// import { useState } from 'react'
import { Link } from 'react-router-dom';
function Header() {


    return (
        <header>
            <nav>
                <h1 className='left'>Santiago Palacio</h1>

                <ul className='right'>
                    <Link className='link' to="/About Me">About Me</Link>
                    <Link className='link' to="/Portfolio">Portfolio</Link>
                    <Link className='link' to="/Contacte">Contact</Link>
                    <Link className='link' to="/Resume">Resume</Link>
                </ul>


            </nav>
        </header>
    )
}

export default Header
