// src/components/Projects.js
import "./index.css"
import React from "react"

function LocationFilm( {} ) {
    return (
        <div className="project-page">
            <div className="project-section">
                <h1>Description du projet</h1>
                
            </div>

            <div className="project-section">
                <h1>Mon implication</h1>
                
            </div>

            <div className="project-section">
                <h1>Défis de conception</h1>
            
            </div>

            <div className="project-link-section">
                <a className="link-button" href="https://github.com/Ayduria/LocationFilm" target="_blank" rel="noopener noreferrer">
                    <img
                        alt="itch.io logo"
                        className="inline-block w-6 mr-2 mb-1"
                        src="./img/icons/github.svg"
                    />
                    Voir le répertoire
                </a>
            </div>
        </div>
    )
}

export default LocationFilm;