// src/components/Projects.js
import "./index.css"
import React from "react"
import { XMarkIcon, DocumentTextIcon } from "@heroicons/react/24/solid"
import { projects } from "./Content"
import BackgroundImage from '../../../Assets/img/white-diamond-dark.png'

function Modal( {isVisible, title, image, close} ) {

    const Project = projects[title];

    return (
        <div className="modal-container">
            <div className="modal" id="modal">
                <div className="modal-header">
                    <h3 className="text-white"><DocumentTextIcon className="w-5 h-5 text-white inline pb-1"/> {title}</h3>
                    <button className="close-button" onClick={close}>
                        <XMarkIcon className="w-8 h-8 ml-1 text-white"/>
                    </button>
                </div>
                <div className="modal-main-content">
                    <div className="modal-image"/>
                    <h2>{title}</h2>
                    <div className="line"/>
                    <div className="modal-content">
                        {title != null ? (<Project />) : ""}
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