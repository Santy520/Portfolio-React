// import { useState } from 'react'
import { Link } from 'react-router-dom';
function Header() {


    return (
        <header>
            <nav>

                <h1 >Santiago Palacio</h1>

                <Link to="/About Me">About Me</Link>
                <Link to="/Portfolio">Portfolio</Link>
                <Link to="/Contacte">Contact</Link>
                <Link to="/Resume">Resume</Link>

            </nav>
        </header>
    )
}

export default Header
