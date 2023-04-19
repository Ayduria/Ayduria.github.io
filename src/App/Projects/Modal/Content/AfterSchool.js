// src/components/Projects.js
import "./index.css"
import React from "react"
import { images } from '../Content'

function AfterSchool( {} ) {
    return (
        <div className="project-page">
        <div className="project-section">
                <blockquote className="w-3/4 lg:w-1/2">
                    <p>Si tu as toujours rêvé d'affronter ta maîtresse d'école avec ton fusil à eau, After School est pour toi ! Joue en tant qu'un enfant dans son terrain de jeu dans ce jeu de tir à la troisième personne dynamique !</p>
                </blockquote>
            </div>

        <div className="project-section">
            <h1>Description du projet</h1>
            
        </div>

        <div className="project-section">
            <h1>Mon implication</h1>
            <h2>Ennemis</h2>

            <h2>Outlines</h2>

            
        </div>

        <div className="project-section">

            <h1>Défis de conception</h1>

            <h2>Pas d'artistes</h2>

        </div>

        <div className="project-link-section">
            <a className="link-button" href="https://zaksley.itch.io/after-school" target="_blank" rel="noopener noreferrer">
                <img
                    alt="itch.io logo"
                    className="inline-block w-6 mr-2 mb-1"
                    src="./img/icons/itch-io.png"
                />
                Voir le jeu
            </a>
        </div>

        <div className="project-section project-credits">
            <h1>Crédits</h1>
            <h2>Équipe</h2>
            <p>Enzo Médina<br/>
                Ann-Laurie Lapointe<br/>
                Clémence Clavel<br/>
                Jean-Félix Girard<br/>
                Lori Lou<br/>
                Hugo Mora<br/>
                Laurianna Ferra<br/>
                Patrick McRea-Desjardins<br/>
                </p>
            <h2>Assets</h2>
            <p>Modèles - POLYGON<br/>
                Outlines - Games By Hyper<br/>
                </p>
            
        </div>
    </div>
    )
}

export default AfterSchool;