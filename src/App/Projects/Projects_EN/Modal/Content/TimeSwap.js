// src/components/Projects.js
import "./index.css"
import React from "react"
import { TrophyIcon } from "@heroicons/react/24/solid"

function TimeSwap( {} ) {
    return (
        <div className="project-page">
            <div className="project-section">
                <blockquote className="w-3/4 lg:w-1/2">
                    <p>In the distant future, two friends decide to get away from the city and go on a little wild camping getaway. However, a being with mysterious intentions forcibly sends them to another world with a magical hourglass artifact.</p>
                </blockquote>
            </div>
            <div className="project-section">
                <p className="text-white text-center"><TrophyIcon className="contact-icon text-neutral-300 w-6 h-6 m-auto mt-5 mb-5"/><b>Winner of second position as well as People's Choice in WonderJam UQAC Autumn 2021</b></p>
            </div>
            <div className="project-section">
                <h1>Project description</h1>
                <p>Time Swap is a game made in 48 hours as part of WonderJam UQAC Autumn 2021. The theme of this edition was "Connection".</p>
                <p>What we've produced is a fast-paced arcade game in which the player must constantly alternate between two characters in two endlessly scrolling parallel worlds.</p>
            </div>

            <div className="project-link-section">
                <a className="link-button mr-4" href="https://original-crab-interactive.itch.io/timeswap" target="_blank" rel="noopener noreferrer">
                    <img
                        alt="itch.io logo"
                        className="inline-block w-6 mr-2 mb-1"
                        src="./img/icons/itch-io.png"
                    />
                   Check out the game
                </a>
                <a className="link-button" href="https://github.com/Ayduria/WonderJam-A2021" target="_blank" rel="noopener noreferrer">
                    <img
                        alt="itch.io logo"
                        className="inline-block w-6 mr-2 mb-1"
                        src="./img/icons/github.svg"
                    />
                    View the repository
                </a>
            </div>

            <div className="project-section">
                <h1>My involvement</h1>
                <h2>Scoring system</h2>

                <p>I implemented the game's scoring system. Basically, in classic arcade fashion, the longer the player survives, the higher their score increases. Here, with each passing second of survival, the score is incremented and is affected by a multiplier which constantly increases as long as the player does not switch character. Thus, the longer the player stays with the same character, putting the other at risk, the more their points are multiplied.</p>

                <p>I displayed the total points and the multiplier in the center of the screen, as well as the timer indicating the survival time.</p>

                <img
                    alt="Score system"
                    className="w-24 mb-5"
                    src="./img/projects/time-swap-score.gif"
                />

                <p>When the player loses, their score is displayed to them as well as their best score, if the latter has not been beaten. Each time the high score is beaten, the new high score is recorded and kept even if the player quits the game. The survival time is also displayed.</p>

                <h2>Cinematic</h2>
                <p>J set up a short cutscene at the start of the game. This was my first experience with cutscenes in a game.</p>
                <img
                    alt="Cutscene"
                    className="w-24 mb-5"
                    src="./img/projects/time-swap-cutscene.gif"
                />
                
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

export default TimeSwap;