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
                    About Me
                </h1>
            </div>
            <div className="container mx-auto flex px-10 md:flex-row flex-col items-center pb-10">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <p className="mb-8 leading-relaxed">I am currently in the last year of my bachelor's degree in game development at UQAC. Before starting university, I completed my collegial studies in the field of web design in Multimedia Integration Techniques at Cégep de Jonquière, where I developed an interest in programming.</p>
                    <p className="mb-10">Being a <b>big video game enthusiast</b> since as long as I can remember, the decision of pursuing my studies in a field that combines my interests in such a way was not very hard.</p>
                    <a
                        href="./files/portfolio-resume-en.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="cv-btn"
                        className="about-btn inline-flex text-gray-100 bg-green-800 hover:bg-green-900 border-0 py-2 px-6 focus:outline-none hover:text-white rounded text-lg">
                        View my CV
                    </a>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 p-10">
                    <img
                        className="object-cover object-center rounded-2xl"
                        alt="Me smiling"
                        src="./img/me.jpg"
                    />
                </div>
            </div>
        </section>
    );
}

export default About;