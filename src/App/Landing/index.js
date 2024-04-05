import "./index.css"
import React, { useContext } from "react"
import { LanguageContext } from "../../Language/languageContext"
import { Link } from "react-scroll"
import BackgroundImage from '../../Assets/img/stardust.png'

function Landing() {
    const { languageData } = useContext(LanguageContext);

    return (
        <section id="landing">
             <div class="video-wrap">
                <video src="./img/landing-demo-video.mp4" autoplay="true" loop="true" muted="true"></video>
            </div>
            <div class="overlay"></div>
            <div className="container mx-auto flex px-10 h-screen md:flex-row flex-col items-center">
                <div className="landing-text flex-grow flex flex-col mb-16 md:mb-0 items-center text-center justify-center">
                    <h1 className="title-font text-5xl lg:text-6xl mb-5 font-medium text-white">
                        Eli Lapointe
                    </h1>
                    <h2 className="title-font text-2xl lg:text-3xl mb-12 font-medium text-white">{ languageData["landing/tagline1"] }<br/>{ languageData["landing/tagline2"] }</h2>
                    <div className="flex justify-center">
                        <Link
                            id="projects-btn"
                            className="about-btn inline-flex text-white bg-green-700 hover:bg-green-800 border-0 py-2 px-6 focus:outline-none rounded hover:text-white text-lg hover:cursor-pointer"
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                                { languageData["landing/button1"] }
                        </Link>
                        <Link
                            className="about-btn ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg hover:cursor-pointer"
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                                { languageData["landing/button2"] }
                        </Link>
                    </div>
                </div>
                <div className="arrow">
                    <span></span>
                    <span></span>
                    <span></span>
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