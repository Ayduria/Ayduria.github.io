import "./index.css"
import React, { useState, useContext }from "react"
import { LanguageContext } from "../../Language/languageContext"
import { Link } from "react-scroll"
import { EnvelopeIcon, LanguageIcon } from "@heroicons/react/24/solid"
import Hamburger from "./Hamburger"

function Navbar() {
    const { language, languageData, setLanguage } = useContext(LanguageContext);
    const handleToggleLanguage = () => {
        const newLanguage = language === 'en' ? 'fr' : 'en';
        setLanguage(newLanguage);
    };

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
                            { languageData["navbar/item1"] }
                    </Link>
                    <Link
                        className="navlink"
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                            { languageData["navbar/item2"] }
                    </Link>
                    <Link
                        className="navlink"
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                            { languageData["navbar/item3"] }
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
                    onClick ={handleToggleLanguage}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                        <p className="uppercase text-white font-bold">{language}</p>
                        <LanguageIcon className="contact-icon text-white font-bold w-4 h-4 ml-1"/>
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