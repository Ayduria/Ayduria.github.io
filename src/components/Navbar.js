// src/components/Navbar.js

import React from "react"
import { useState } from "react"
import { Link, animateScroll as scroll } from "react-scroll"
import { ArrowRightIcon } from "@heroicons/react/24/solid"

function Hamburger({ isOpen }) {
    return (
        <>
            <div className="hamburger">
                <div className="burger burger1"/>
                <div className="burger burger2"/>
                <div className="burger burger3"/>
            </div>

            <style jsx>{`
                .hamburger{
                    width: 2rem;
                    height: 2rem;
                    display: flex;
                    justify-content: space-around;
                    flex-flow: column nowrap;
                    z-index: 10;
                }
                .burger{
                    width: 2rem;
                    height: 0.25rem;
                    border-radius: 10px;
                    background-color: white;
                    transform-origin: 1px;
                    transition: all 0.3s linear;
                    margin-top:3px;
                    margin-left: 20px;
                }

                .hamburger:hover {
                    cursor:pointer;
                }

                .burger1{
                    transform: ${ isOpen ? 'rotate(45deg)' : 'rotate(0)'};
                }
                .burger2{
                    transform: ${ isOpen ? 'translateX(100%)' : 'translateX(0)'};
                    opacity: ${ isOpen ? 0 : 1};
                }
                .burger3{
                    transform: ${ isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
                }

            `}</style>
        </>
    );
}

function Navbar() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <header className="bg-gray-800 md:fixed top-0 z-10 w-full shadow-lg h-[70px]">
            <div className="fullnavbar container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center h-full">
                <Link
                    className="namelink title-font font-medium text-white mb-4 md:mb-0 h-full hover:cursor-pointer"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                        <img
                            src="./img/logo_blanc.png"
                            className="logo h-full float-left"/>
                        <a className="ml-3 text-xl">
                            Ann-Laurie Lapointe
                        </a>
                </Link>
                <nav className="mainnav md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <Link
                        className="navlink mr-5 hover:text-white hover:cursor-pointer active:text-white"
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                            Compétences
                    </Link>
                    <Link
                        className="navlink mr-5 hover:text-white hover:cursor-pointer"
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                            Projets
                    </Link>
                </nav>
                <Link
                    className="navlink inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 hover:cursor-pointer"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                        Contact
                        <ArrowRightIcon className="w-4 h-4 ml-1"/>
                </Link>

            </div>

            <div className="hamburger" onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen}/>
            </div>

            <style jsx>{`
                .hamburger{
                    display:none
                }

                @media (max-width: 767px){
                
                    .hamburger{
                        display:inline;
                        padding-top: 10px;
                        margin-left: 10px;
                        z-index: 20;
                    }

                    header {
                        position:sticky;
                        margin-bottom:20px;
                    }

                    .fullnavbar {
                        display: ${hamburgerOpen ? 'inline' : 'none'};
                        background-color: #101010;
                        height: 100vh;
                        width: 50vw;
                        margin-top: 70px;
                        left:0;
                        position: fixed;
                        z-index: 20;
                        text-align:left;
                    }

                    .navlink {
                        width: 100%;
                        padding: 10px;
                        border-bottom: 1px solid grey;
                        margin-right:0px;
                    }

                    .mainnav {
                        text-align: left;
                    }

                    .namelink {
                        display:none
                    }
                }
            `}</style>
        </header>
    )
}

export default Navbar;