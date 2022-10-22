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
    const [showApps, setShowApps] = useState(false);
    const [showWeb, setShowWeb] = useState(false);

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
        setShowApps(false);
        setShowWeb(false);
    }

    function showAppProjects() {
        setShowGames(false);
        setShowApps(true);
        setShowWeb(false);
    }

    function showWebProjects() {
        setShowGames(false);
        setShowApps(false);
        setShowWeb(true);
    }

    function showAllProjects() {
        setShowGames(true);
        setShowApps(true);
        setShowWeb(true);
    }

    return (
        <section id="projects" className="text-gray-400 body-font">
            <div className="container px-5 pt-10 pb-16 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-10">
                    <CodeBracketIcon className="mx-auto inline-block w-10 mb-4"/>
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Mes projets
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Divers projets informatiques que j'ai réalisés au cours de mes études collégiales et universitaires.
                    </p>
                </div>
                <div className="mb-5">
                    <button id="btn-all" className="btn-category" onClick={showAllProjects}>Tous</button>
                    <button id="btn-games" className="btn-category" onClick={showGameProjects}>Jeux</button>
                    <button id="btn-apps" className="btn-category" onClick={showAppProjects}>Applications</button>
                    <button id="btn-web" className="btn-category" onClick={showWebProjects}>Web</button> 
                </div>
                <div className="flex flex-wrap -m-4 justify-center">
                    {projects.map((project) => (
                        <div className="sm:w-1/2 w-100 p-4" style={{ display: (project.categorie == 'Jeux'  && showGames || project.categorie == 'Applications' && showApps || project.categorie == 'Web' && showWeb ? 'block' : 'none') }}>
                            <a
                                onClick={() => showModal(project.title, project.image)}
                                key={project.thumbnail}>
                                <div className="project-box flex relative">
                                    <img
                                        alt="gallery"
                                        className="absolute inset-0 w-full h-full object-cover object-center rounded"
                                        src={project.thumbnail}
                                    />
                                    <div className="info-overlay px-8 py-10 relative z-0 w-full border-4 border-gray-800 opacity-0 hover:opacity-100 rounded">
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

            
                #btn-all {
                    color: ${ showGames && showApps && showWeb ? 'white' : 'gray'};
                    border-color: ${ showGames && showApps && showWeb ? 'white' : 'gray'};
                    background-color : ${ showGames && showApps && showWeb ? 'rgba(34, 137, 137, 0.5)' : 'transparent'};
                }

                #btn-games {
                    color: ${ showGames && !showApps && !showWeb ? 'white' : 'gray'};
                    border-color: ${ showGames && !showApps && !showWeb ? 'white' : 'gray'};
                    background-color: ${ showGames && !showApps && !showWeb ? 'rgba(34, 137, 137, 0.5)' : 'transparent'};
                }

                #btn-apps {
                    color: ${ !showGames && showApps && !showWeb ? 'white' : 'gray'};
                    border-color: ${ !showGames && showApps && !showWeb ? 'white' : 'gray'};
                    background-color: ${ !showGames && showApps && !showWeb ? 'rgba(34, 137, 137, 0.5)' : 'transparent'};
                }

                #btn-web {
                    color: ${ !showGames && !showApps && showWeb ? 'white' : 'gray'};
                    border-color: ${ !showGames && !showApps && showWeb ? 'white' : 'gray'};
                    background-color: ${ !showGames && !showApps && showWeb ? 'rgba(34, 137, 137, 0.5)' : 'transparent'};
                }

            `}</style>
        </section>
    );
}

export default Projects;