// src/components/Projects.js
import "./index.css"
import React from "react"

function TimeSwap( {} ) {
    return (
        <div className="project-page">
            <div className="project-section">
                <h1>Description du projet</h1>
                <p>Potion Frenzy est un jeu effectué en 48 heures dans le cadre du WonderJam UQAC Automne 2021. Le thème de cette édition était "Connexion".</p>
                <p>Notre jeu a remporté la deuxième position ainsi que le choix du public.</p>
            </div>

            <div className="project-section">
                <h1>Mon implication</h1>
                
            </div>

            <div className="project-section">
                <h1>Défis de conception</h1>
            
            </div>

            <div className="project-link-section">
                <a className="link-button mr-4" href="https://original-crab-interactive.itch.io/timeswap" target="_blank" rel="noopener noreferrer">
                    <img
                        alt="itch.io logo"
                        className="inline-block w-6 mr-2 mb-1"
                        src="./img/icons/itch-io.png"
                    />
                   Voir le jeu
                </a>
                <a className="link-button" href="https://github.com/Ayduria/WonderJam-A2021" target="_blank" rel="noopener noreferrer">
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
                Vivianne Tremblay<br/>
                Christopher Tremblay<br/>
                Lionel Blanchis</p>
            </div>
        </div>
    )
}

export default TimeSwap;