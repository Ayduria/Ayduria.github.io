// src/components/Navbar.js
import "./index.css"
import React from "react"
import { useState } from "react"
import { Link } from "react-scroll"
import { EnvelopeIcon, LanguageIcon } from "@heroicons/react/24/solid"
import Hamburger from "./Hamburger"

function Navbar(props) {
    const {toggleLanguage} = props;
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <header className="bg-gray-800 fixed top-0 z-10 w-full shadow-lg">
            <div className="fullnavbar container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center h-full">
                <Link
                    className="namelink title-font font-medium text-white mb-4 md:mb-0 h-full hover:cursor-pointer"
                    activeClass="active"
                    to="landing"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                        <img
                            alt="Portfolio logo"
                            src="./img/icons/logo_blanc.png"
                            className="logo h-full float-left h-8"/>
                        <a className="ml-3 text-xl" href="javascript:void(0);">
                            Eli Lapointe
                        </a>
                </Link>
                <nav className="mainnav md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <Link
                        className="navlink"
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                            À propos de moi
                    </Link>
                    <Link
                        className="navlink"
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                            Projets
                    </Link>
                    <Link
                        className="navlink"
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                            Compétences
                    </Link>
                </nav>
                <Link
                    className="navlink"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                        Contact
                        <EnvelopeIcon className="contact-icon w-4 h-4 ml-1"/>
                </Link>
                <Link
                    className="navlink"
                    activeClass="active"
                    onClick ={toggleLanguage}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                        <span className="text-white font-bold">FR</span> | EN
                        <LanguageIcon className="w-4 h-4 ml-1"/>
                </Link>

            </div>

            <div className="darken" onClick={hamburgerOpen ? toggleHamburger : undefined }></div>

            <div className="hamburger" onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen}/>
            </div>

            <style jsx>{`

                @media (max-width: 767px){
                    .fullnavbar {
                        left: ${hamburgerOpen ? '0px' : '-500px'};
                    }

                    .darken {
                        opacity: ${hamburgerOpen ? '0.5' : '0'};
                        visibility: ${hamburgerOpen ? 'visible' : 'hidden'};
                    }
                }
            `}</style>
        </header>
    )
}

export default Navbar;