// src/components/Projects.js
import "./index.css"
import React from "react"
import { images } from '../Content'

function GamersGuess( {} ) {
    return (
        <div className="project-page">
            <div className="project-section">
                <h1>Description du projet</h1>

                <div className="iframe-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/tZZvvv6Bq_4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    <style jsx>{`
                        .iframe-container {
                            background-image: url(${ images.LoadingGif });
                        }
                    `}</style>
                </div>
                
            </div>

            <div className="project-section">
                <h1>Mon implication</h1>
                
            </div>

            <div className="project-section">
                <h1>Défis de conception</h1>
            
            </div>

            <div className="project-link-section">
                <a className="link-button" href="https://github.com/Ayduria/GamersGuess" target="_blank" rel="noopener noreferrer">
                    <img
                        alt="itch.io logo"
                        className="inline-block w-6 mr-2 mb-1"
                        src="./img/icons/github.svg"
                    />
                    Voir le répertoire
                </a>
            </div>

            <div className="project-section project-credits">
            <h1>Crédits</h1>
                <p>Ann-Laurie Lapointe<br/>
                Patrick McRea-Desjardins</p>
            </div>
        </div>
    )
}

export default GamersGuess;