import React from 'react'
import './Navbarcss.scss'
import { HashLink } from "react-router-hash-link"

const Navbar = (props) => {
    return (
        <div id="home">
            <div className='divv'>
                <nav>
                    <ul className="menuItems">
                        <li className='lii'><HashLink to='#home' smooth>Home</HashLink></li>
                        <li><HashLink to='#about' smooth>About</HashLink></li>
                        <li><HashLink to='#projects' smooth>Projects</HashLink></li>
                        <li><HashLink to='#blog' smooth>Blog</HashLink></li>
                        <li><HashLink to='#contact' smooth>Contact</HashLink></li>
                    </ul>
                </nav>
            </div>
            <header>
                <h1>404</h1>
                <h3>error</h3><br />
                <hr />
                <p>
                    "Pal...<br />
                    You've landed on Sarthak web<br />
                    Hands up.."
                </p>
            </header>
        </div>
    )
}

export default Navbar