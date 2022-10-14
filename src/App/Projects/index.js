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
    const [content, setContent] = useState(null);

    function showModal(title, image, content) {
        setShow(true);
        setTitle(title);
        setImage(image);
        setContent(content);
    }

    function hideModal() {
        setShow(false);
    }

    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
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
                <div className="flex flex-wrap -m-4">
                    {projects.map((project) => (
                        <div className="sm:w-1/2 w-100 p-4">
                            <a
                                onClick={() => showModal(project.title, project.image, project.content)}
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
                            <Modal isVisible={show} title={title} image={image} content={content} close={hideModal}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;