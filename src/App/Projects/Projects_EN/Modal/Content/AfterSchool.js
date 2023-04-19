// src/components/Projects.js
import "./index.css"
import React from "react"
import { images } from '../Content'

function AfterSchool( {} ) {
    return (
    <div className="project-page">
        <div className="project-section">
                <blockquote className="w-3/4 lg:w-1/2">
                    <p>If you've ever dreamed of taking on your school teacher with your water gun, After School is for you ! Play as a child in his playground in this dynamic third-person shooter !</p>
                </blockquote>
            </div>

        <div className="project-section">
            <h1>Project description</h1>
            
        </div>

        <div className="project-section">
            <h1>My involvement</h1>
            <h2>Enemies</h2>

            <h2>Outlines</h2>

            
        </div>

        <div className="project-section">

            <h1>Design challenges</h1>

            <h2>No artists</h2>

        </div>

        <div className="project-link-section">
            <a className="link-button" href="https://zaksley.itch.io/after-school" target="_blank" rel="noopener noreferrer">
                <img
                    alt="itch.io logo"
                    className="inline-block w-6 mr-2 mb-1"
                    src="./img/icons/itch-io.png"
                />
                Check out the game
            </a>
        </div>

        <div className="project-section project-credits">
            <h1>Credits</h1>
            <h2>Team</h2>
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
            <p>Models - POLYGON<br/>
                Outlines - Games By Hyper<br/>
                </p>
            
        </div>
    </div>
    )
}

export default AfterSchool;