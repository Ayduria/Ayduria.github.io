// src/components/Projects.js
import "./index.css"
import React from "react"

function FeatureHunter( {} ) {
    return (
        <div className="project-page">
            <div className="project-section">
                <h1>Description du projet</h1>
                <p>Feature Hunter est un jeu de tir à la première personne effectué en 48 heures dans le cadre du WonderJam UQAC Automne 2022. Le thème de cette édition était "It's not a bug, it's a feature". Notre équipe était hors-concours.</p>

                <p>Nous avons opté pour un jeu où le joueur incarne un agent ayant pour mission de trouver et d'identifiers des objets aux comportements inhabituels et de les éliminer.</p>
                
            </div>

            <div className="project-section">
                <h1>Mon implication</h1>
                
            </div>

            <div className="project-section">
                <h1>Défis de conception</h1>
            
            </div>

            <div className="project-link-section">
                <a className="link-button mr-4" href="https://choccymilk.itch.io/feature-hunter" target="_blank" rel="noopener noreferrer">
                    <img
                        alt="itch.io logo"
                        className="inline-block w-6 mr-2 mb-1"
                        src="./img/icons/itch-io.png"
                    />
                   Voir le jeu
                </a>
                <a className="link-button" href="https://github.com/Maxime26s/WonderJam-A2022" target="_blank" rel="noopener noreferrer">
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
                Maxime Simard<br/>
                Simon Belley<br/>
                Jean-Christophe Tremblay<br/>
                Charlie Baron-Bouchard<br/>
                Julien Bilodeau<br/>
                Guillaume Morin</p>
            </div>
        </div>
    )
}

export default FeatureHunter;