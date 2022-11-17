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
                                <p>We are an award-winning creative agency, dedicated to the best result in web design, promotion, business consulting, and marketing.</p>
                                <p className="rights"><span>©  </span><span className="copyright-year">2018</span><span> </span><span>Waves</span><span>. </span><span>All Rights Reserved.</span></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h5>Contacts</h5>
                            <dl className="contact-list">
                                <dt>Address:</dt>
                                <dd>798 South Park Avenue, Jaipur, Raj</dd>
                            </dl>
                            <dl className="contact-list">
                                <dt>email:</dt>
                                <dd><a href="mailto:#">dkstudioin@gmail.com</a></dd>
                            </dl>
                            <dl className="contact-list">
                                <dt>phones:</dt>
                                <dd><a href="tel:#">https://karosearch.com</a> <span>or</span> <a href="tel:#">https://karosearch.com</a>
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
                    <div className="col"><a className="social-inner" href="#"><span>Facebook</span></a></div>
                    <div className="col"><a className="social-inner" href="#"><span>instagram</span></a></div>
                    <div className="col"><a className="social-inner" href="#"><span>twitter</span></a></div>
                    <div className="col"><a className="social-inner" href="#"><span>Github</span></a></div>
                </div>
            </footer>
        </div>
    )
}

export default Contact