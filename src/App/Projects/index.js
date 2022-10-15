// src/components/Projects.js
import "./index.css"
import { projects } from "./data"
import React from "react"
import { useState } from "react"
import { CodeBracketIcon } from "@heroicons/react/24/solid"
import Modal from "./Modal"

function Projects() {

    const [show, setShow] = useState(false);
    const [title, setTitle] = useState(null);
    const [image, setImage] = useState(null);

    const [showGames, setShowGames] = useState(true);
    const [showOthers, setShowOthers] = useState(false);

    function showModal(title, image) {
        setShow(true);
        setTitle(title);
        setImage(image);
    }

    function hideModal() {
        setShow(false);
    }

    function showGameProjects() {
        setShowGames(true);
        setShowOthers(false);
    }

    function showOtherProjects() {
        setShowOthers(true);
        setShowGames(false);
    }

    function showAllProjects() {
        setShowGames(true);
        setShowOthers(true);
    }

    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-10">
                    <CodeBracketIcon className="mx-auto inline-block w-10 mb-4"/>
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Mes projets
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                        facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
                        fuga dolore.
                    </p>
                </div>
                <div className="mb-5">
                    <button id="btn-games" className="btn-category" onClick={showGameProjects}>Jeux</button>
                    <button id="btn-other" className="btn-category" onClick={showOtherProjects}>Autre</button>
                    <button id="btn-all" className="btn-category" onClick={showAllProjects}>Tout</button>
                </div>
                <div className="flex flex-wrap -m-4">
                    {projects.map((project) => (
                        <div className="sm:w-1/2 w-100 p-4" style={{ display: (project.categorie == 'Jeux'  && showGames || project.categorie == 'Autre' && showOthers ? 'block' : 'none') }}>
                            <a
                                onClick={() => showModal(project.title, project.image)}
                                key={project.thumbnail}>
                                <div className="project-box flex relative">
                                    <img
                                        alt="gallery"
                                        className="absolute inset-0 w-full h-full object-cover object-center"
                                        src={project.thumbnail}
                                    />
                                    <div className="info-overlay px-8 py-10 relative z-0 w-full border-4 border-gray-800 opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                            {project.subtitle}
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-white mb-3">
                                            {project.title}
                                        </h1>
                                        <p className="leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </a>
                            <Modal isVisible={show} title={title} image={image} close={hideModal}/>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`

                #btn-games {
                    color: ${ showGames && !showOthers ? 'white' : 'gray'};
                    border-color: ${ showGames && !showOthers ? 'white' : 'gray'};
                    background-color: ${ showGames && !showOthers ? 'rgba(34, 137, 137, 0.5)' : 'transparent'};
                }

                #btn-other {
                    color: ${ showOthers && !showGames ? 'white' : 'gray'};
                    border-color: ${ showOthers && !showGames ? 'white' : 'gray'};
                    background-color: ${ showOthers && !showGames ? 'rgba(34, 137, 137, 0.5)' : 'transparent'};
                }

                #btn-all {
                    color: ${ showGames && showOthers ? 'white' : 'gray'};
                    border-color: ${ showGames && showOthers ? 'white' : 'gray'};
                    background-color : ${ showGames && showOthers ? 'rgba(34, 137, 137, 0.5)' : 'transparent'};
                }


            `}</style>
        </section>
    );
}

export default Projects;