import React from 'react'
import './Contactcs.css'
import { HashLink } from 'react-router-hash-link'

const Contact = () => {
    return (
        <div id='contact'>
            <footer className="section footer-classic context-dark bg-image" style={{background: "none"}}>
                <div className="container">
                    <div className="row row-30">
                        <div className="col-md-4 col-xl-5">
                            <div className="pr-xl-4">
                                <p>It is a personal website created by Sarthak from scratch.</p>
                                <p className="rights"><span>©  </span><span className="copyright-year">2022</span><span> </span><span>. </span><span>All Rights Reserved.</span></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h5>Contacts</h5>
                            <dl className="contact-list">
                                <dt>Address:</dt>
                                <dd>Dehradun, Uttarakhand</dd>
                            </dl>
                            <dl className="contact-list">
                                <dt>email:</dt>
                                <dd><a rel="noreferrer" target="_blank" href="mailto:#">shibugarg0303@gmail.com</a></dd>
                            </dl>
                            <dl className="contact-list">
                                <dt>phones:</dt>
                                <dd><a rel="noreferrer" target="_blank" href="tel:#">+91 9368122660</a>
                                </dd>
                            </dl>
                        </div>
                        <div className="col-md-4 col-xl-3">
                            <h5>Links</h5>
                            <ul className="nav-list">
                            <li><HashLink to="#home" smooth>Home</HashLink></li>
                                <li><HashLink to="#about" smooth>About</HashLink></li>
                                <li><HashLink to="#projects" smooth>Projects</HashLink></li>
                                <li><HashLink to="#blogs" smooth>Blog</HashLink></li>
                                <li><HashLink to="#contact" smooth>Contacts</HashLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row no-gutters social-container">
                    <div className="col"><a rel="noreferrer" target="_blank" className="social-inner" href="https://www.facebook.com/"><span>Facebook</span></a></div>
                    <div className="col"><a rel="noreferrer" target="_blank" className="social-inner" href="https://www.instagram.com/_sarthak__003/"><span>instagram</span></a></div>
                    <div className="col"><a rel="noreferrer" target="_blank" className="social-inner" href="https://twitter.com/?lang=en-in"><span>twitter</span></a></div>
                    {/* // eslint-disable-next-line */}
                    <div className="col"><a rel="noreferrer" target="_blank" className="social-inner" href="https://github.com/Sar-thak-3"><span>Github</span></a></div>
                </div>
            </footer>
        </div>
    )
}

export default Contact