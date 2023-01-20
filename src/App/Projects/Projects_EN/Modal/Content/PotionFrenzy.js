// src/components/Projects.js
import "./index.css"
import React from "react"

function PotionFrenzy( {} ) {
    return (
        <div className="project-page">
            <div className="project-section">
                <blockquote className="w-3/4 lg:w-1/2">
                    <p>Play as the mad alchemist, Riko. His one and only goal is to concost the ultimate magic potion, but he no longer has all his gray matter.</p>
                </blockquote>
            </div>
            <div className="project-section">
                
                <h1>Project description</h1>
                <p>Potion Frenzy is a game made in 48 hours as part of the WonderJam UQAC Autumn 2020. The theme of this edition was "When magic goes wrong".</p>

                <p>In this game, the player must, on each level, read and memorize a potion recipe, then make that potion by throwing ingredients into a pot from an ever-growing pile. The less the recipe is followed, the more the character will have to fight powerful enemies at the end of the timer.</p>
            </div>

            <div className="project-section">
                <h1>My involvement</h1>
                <h2>Shooting mechanics</h2>
                <p>I implemented the functioning of the main character's weapon, his magic wand. It is oriented according to the mouse movement and, when the player clicks, it launches a projectile in the direction of the click.</p>
                <img
                    alt="Shooting"
                    className="w-24 mb-5"
                    src="./img/projects/pf-shooting.gif"
                />

                <h2>Fight against enemies</h2>
                <p>I implemented the enemies' behavior upon shooting out of the pot. They immediately start chasing the player, inflicting damage if they hit them. The player must eliminate them by shooting them, which can take more or less bullets depending on the strength of the enemy.</p>
                <img
                    alt="Fighting enemies"
                    className="w-24 mb-5"
                    src="./img/projects/pf-fighting.gif"
                />
                <p>I also implemented the game's health system. When the player takes damage, their life bar in the upper corner decreases, changing color according to the current health level.</p>
                
            </div>

            <div className="project-section">
                <h1>Design challenges</h1>
                <h2>Lack of experience</h2>
                <p>This WonderJam was the first one I participated in, and none of my team members had any experience developing games with Unity. Thus, we had to learn as we went.</p>
            
            </div>

            <div className="project-link-section">
                <a className="link-button mr-4" href="https://original-crab-interactive.itch.io/potion-frenzy" target="_blank" rel="noopener noreferrer">
                    <img
                        alt="itch.io logo"
                        className="inline-block w-6 mr-2 mb-1"
                        src="./img/icons/itch-io.png"
                    />
                   Check out the game
                </a>
                <a className="link-button" href="https://github.com/Ayduria/WonderJam-A2020" target="_blank" rel="noopener noreferrer">
                    <img
                        alt="itch.io logo"
                        className="inline-block w-6 mr-2 mb-1"
                        src="./img/icons/github.svg"
                    />
                    View the repository
                </a>
            </div>

            <div className="project-section project-credits">
            <h1>Credits</h1>
                <p>Eli Lapointe<br/>
                Vivianne Tremblay<br/>
                Christopher Tremblay<br/>
                Lionel Blanchis</p>
            </div>
        </div>
    )
}

export default PotionFrenzy;