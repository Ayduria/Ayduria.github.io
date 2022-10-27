// src/components/Projects.js
import "./index.css"
import React from "react"
import { XMarkIcon, DocumentTextIcon } from "@heroicons/react/24/solid"
import { projects } from "./Content"
import BackgroundImage from '../../../Assets/img/white-diamond-dark.png'

function Modal( {isVisible, title, image, subtitle, close} ) {

    const Project = projects[title];

    return (
        <div className="modal-container">
            <div className="modal" id="modal">
                <div className="modal-header">
                    <h4 className="text-white"><DocumentTextIcon className="w-5 h-5 text-white inline pb-1"/> {title}</h4>
                    <button className="close-button" onClick={close}>
                        <XMarkIcon className="w-8 h-8 ml-1 text-white"/>
                    </button>
                </div>
                <div className="modal-main-content">
                    <div className="modal-image"/>
                    <div className="project-description p-5 md:p-6 lg:p-8">
                        <h3 className="font-bold title-font font-medium text-green-400">{subtitle}</h3>
                        <h2>{title}</h2>
                        <div className="line"/>
                        <div className="modal-content pb-10">
                            {title != null ? (<Project />) : ""}
                        </div>
                    </div>
                </div>
            </div> 
            <style jsx>{`

                body {
                    overflow: ${isVisible ? 'hidden' : 'auto'};
                }

                .modal-image {
                    background-image: url("${image}")
                }

                .modal-container {
                    visibility: ${isVisible ? 'visible' : 'hidden'};
                }

                .modal {
                    bottom: ${isVisible ? '0px' : '-100%'};
                }

                .modal {
                    background-image: url(${BackgroundImage});
                }
            `}</style>
        </div>
    )
}

export default Modal;