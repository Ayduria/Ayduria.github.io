// src/components/Projects.js
import "./index.css"
import React from "react"
import { XMarkIcon } from "@heroicons/react/24/solid"
import parse from "html-react-parser"

function Modal( {isVisible, title, image, content, close} ) {
    return (
        <div className="modal-container">
            <div className="modal" id="modal">
                <div className="modal-header">
                    <button className="close-button" onClick={close}>
                        <XMarkIcon className="w-10 h-10 ml-1 text-white"/>
                    </button>
                </div>
                <div className="modal-main-content">
                    <div className="modal-image"/>
                    <h2>{title}</h2>
                    <div className="line"/>
                    <div className="modal-content">
                        {content != null ? (parse(content)) : ("")}
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
            `}</style>
        </div>
    )
}

export default Modal;