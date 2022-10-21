// src/components/About.js
import "./index.css"
import React from "react"
import { Link } from "react-scroll"

function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 h-screen md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-10 font-medium text-white">
                        Salut ! Je suis Ann-Laurie Lapointe.&nbsp;
                        <br className="hidden lg:inline-block"/>
                        J'étudie en développement de jeux vidéo.
                    </h1>
                    <p className="mb-8 leading-relaxed">Je suis présentement dans la dernière année de mon <b>baccalauréat en développement de jeux vidéo</b> à l'UQAC. Avant d'entrer à l'université, j'ai complété mes études collégiales dans le domaine du web en Techniques d'intégration multimédia au Cégep de Jonquière, où j'ai développé un intérêt marqué pour la programmation.</p>
                    <p className="mb-10">Étant une <b>grande passionnée de jeux vidéo</b> depuis aussi longtemps que je me souvienne, la décision de poursuivre mes études dans un domaine qui combine mes deux passions ne fut pas bien difficile.</p>
                    <div className="flex justify-center">
                        <Link
                            className="about-btn ninline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded hover:text-white text-lg hover:cursor-pointer"
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                                Voir mes projets
                        </Link>
                        <a
                            href=""
                            className="about-btn ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            Voir mon CV
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded-full"
                        alt="Photo of me"
                        src="./img/me.jpg"
                    />
                </div>
            </div>
        </section>
    );
}

export default About;