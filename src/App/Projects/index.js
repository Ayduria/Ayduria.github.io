import "./index.css"
import React, { useState, useContext, useEffect } from "react"
import { LanguageContext } from "../../Language/languageContext"
import { projects } from "./data"
import { CodeBracketIcon } from "@heroicons/react/24/solid"
import Modal from "./Modal"

function Projects() {
    const { languageData } = useContext(LanguageContext);

    const [show, setShow] = useState(false);
    const [title, setTitle] = useState(null);
    const [image, setImage] = useState(null);
    const [subtitle, setSubtitle] = useState(null);

    const [showGames, setShowGames] = useState(true);
    const [showOthers, setShowOthers] = useState(false);

    function showModal(title, image, subtitle) {
        setShow(true);
        setTitle(title);
        setImage(image);
        setSubtitle(subtitle);
    }

    function hideModal() {
        setShow(false);
        setTitle(null);
        setImage(null);
        setSubtitle(null);
    }

    function showGameProjects() {
        setShowGames(true);
        setShowOthers(false);
    }

    function showOtherProjects() {
        setShowGames(false);
        setShowOthers(true);
    }

    function showAllProjects() {
        setShowGames(true);
        setShowOthers(true);
    }

    if (!languageData.projects) return null;
   
    return (
        <section id="projects" className="text-gray-400 body-font">
            <div className="container px-5 pt-10 pb-16 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-10">
                    <CodeBracketIcon className="mx-auto inline-block w-10 mb-4"/>
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        { languageData.projects.title }
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        { languageData.projects.tagline }
                    </p>
                </div>
                <div className="mb-5">
                    <button id="btn-all" className="btn-category" onClick={showAllProjects}>{ languageData.projects.button1 }</button>
                    <button id="btn-games" className="btn-category" onClick={showGameProjects}>{ languageData.projects.button2 }</button>
                    <button id="btn-others" className="btn-category" onClick={showOtherProjects}>{ languageData.projects.button3 }</button>
                </div>
                <div className="flex flex-wrap -m-4 justify-center">
                    {projects.map((project, index) => (
                        <div className="sm:w-1/2 w-100 p-4" style={{ display: (((project.category == 'Games')  && showGames) || ((project.category == 'Others') && showOthers) ? 'block' : 'none') }}>
                            <a
                                href="javascript:void(0);"
                                onClick={() => showModal(project.title, project.image, project.subtitle)}
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
                                            {languageData.projects.taglines[index]}
                                        </p>
                                    </div>
                                </div>
                            </a>
                            <Modal isVisible={show} title={title} image={image} subtitle={subtitle} close={hideModal}/>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`

            
                #btn-all {
                    color: ${ showGames && showOthers ? 'white' : 'gray'};
                    border-color: ${ showGames && showOthers ? 'white' : 'gray'};
                    background-color : ${ showGames && showOthers ? 'rgba(34, 137, 137, 0.5)' : 'transparent'};
                }

                #btn-games {
                    color: ${ showGames && !showOthers ? 'white' : 'gray'};
                    border-color: ${ showGames && !showOthers ? 'white' : 'gray'};
                    background-color: ${ showGames && !showOthers ? 'rgba(34, 137, 137, 0.5)' : 'transparent'};
                }

                #btn-others {
                    color: ${ !showGames && showOthers ? 'white' : 'gray'};
                    border-color: ${ !showGames && showOthers ? 'white' : 'gray'};
                    background-color: ${ !showGames && showOthers ? 'rgba(34, 137, 137, 0.5)' : 'transparent'};
                }

            `}</style>
        </section>
    );
}

export default Projects;