// src/components/About.js
import "./index.css"
import React from "react"
import { Link } from "react-scroll"
import BackgroundImage from '../../Assets/img/stardust.png'

function Landing() {
    return (
        <section id="landing">
            <div className="container mx-auto flex px-10 h-screen md:flex-row flex-col items-center">
                <div className="flex-grow flex flex-col mb-16 md:mb-0 items-center text-center justify-center">
                    <h1 className="title-font text-5xl lg:text-6xl mb-5 font-medium text-white">
                        Ann-Laurie Lapointe
                    </h1>
                    <h2 className="title-font text-2xl lg:text-3xl mb-12 font-medium text-white">Étudiante en développement de jeux vidéo</h2>
                    <div className="flex justify-center">
                        <Link
                            id="projects-btn"
                            className="about-btn inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded hover:text-white text-lg hover:cursor-pointer"
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                                Voir mes projets
                        </Link>
                        <Link
                            className="about-btn ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg hover:cursor-pointer"
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                                Me contacter
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
                #landing {
                    background-image: url(${BackgroundImage});
                }
            `}</style>
        </section>
    );
}

export default Landing;