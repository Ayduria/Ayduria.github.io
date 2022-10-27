// src/components/About.js
import "./index.css"
import React from "react"
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline"

function About() {
    return (
        <section id="about">
            <div className="flex flex-col w-full pt-12">
                <QuestionMarkCircleIcon className="mx-auto inline-block w-10 mb-4"/>
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-10 lg:mb-0">
                    À propos de moi
                </h1>
            </div>
            <div className="container mx-auto flex px-10 md:flex-row flex-col items-center pb-10">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <p className="mb-8 leading-relaxed">Je suis présentement dans la dernière année de mon <b>baccalauréat en développement de jeux vidéo</b> à l'UQAC. Avant d'entrer à l'université, j'ai complété mes études collégiales dans le domaine du web en Techniques d'intégration multimédia au Cégep de Jonquière, où j'ai développé un intérêt marqué pour la programmation.</p>
                    <p className="mb-10">Étant une <b>grande passionnée de jeux vidéo</b> depuis aussi longtemps que je me souvienne, la décision de poursuivre mes études dans un domaine qui combine ainsi mes intérêts ne fut pas bien difficile.</p>
                    <a
                        href="./files/CV-placeholder.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="cv-btn"
                        className="about-btn inline-flex text-gray-100 bg-green-800 hover:bg-green-900 border-0 py-2 px-6 focus:outline-none hover:text-white rounded text-lg">
                        Voir mon CV
                    </a>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 p-10">
                    <img
                        className="object-cover object-center rounded-full"
                        alt="Me smiling against a blue sky background"
                        src="./img/me.jpg"
                    />
                </div>
            </div>
        </section>
    );
}

export default About;