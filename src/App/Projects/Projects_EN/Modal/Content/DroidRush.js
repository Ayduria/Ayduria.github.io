// src/components/Projects.js
import "./index.css"
import React from "react"

function DroidRush( {} ) {
    return (
        <div className="project-page">
            <div className="project-section">
                <h1>Project description</h1>
                <p>Droid Rush is a top-down stragery and stealth game where two players must work together to complete levels without being spotted by patrolling security guards. Items can be used to activate special abilities, and each character has their own unique ability. However, a player can only carry one item at a time !</p>

                <p>Initially, Droid Rush started as an unofficial 48 hour jam game with the themes "Dungeons" and "Pocket Sized" but, at the end of this jam, we saw potential and agreed to continue working on it. The game is currently still in development and serves as preparation for the team for our participation in the upcoming <b><a className="text-white" href="https://montreal.ubisoft.com/en/our-commitments/education/game-lab-competition/" target="_blank">Ubisoft 2023 Game Lab Competition</a></b>.</p>
                
            </div>

            <div className="project-section">
                <h1>My involvement</h1>
                <h2>Security Guards</h2>
                <p>In this project, I am fully dedicated to security guards and their AI. I reused the detection and patrol system I designed in another of my projects (Lux), but I adapted and improved it in addition to adding new behaviors.</p>

                <video className="mt-8 mb-8" controls>
                    <source src="./img/projects/droidrush-detection.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>

                <p>Essentially, the behavior of security guards can be summarized as follows: by default, they patrol or are stationary. If they hear a noise, they become suspicious and head for the source, staying there for a while before returning to their business. If a player enters their field of vision, delimited by a colored cone blocked by obstacles genered via EQS, the player is spotted and the level starts again.</p>

                <img
                    alt="Guards resuming their watch duty"
                    className="w-24 mb-5"
                    src="./img/projects/droidrush-guards-resuming.gif"
                />

                <p>A guard can be set to either stationary mode or patrol mode. In stationary mode, it remains in a fixed location and resumes exactly that position and orientation upon return from a noise investigation. In patrol mode, it continues its patrol at the point where it was before being interrupted.</p>

                <img
                    alt="Guards resuming their watch duty"
                    className="w-24 mb-5"
                    src="./img/projects/droidrush-guards-stealth.gif"
                />

                <p>Among the noises guards can react to are footsteps. If the player is running, their footsteps are louder, alerting surrounding guards in a larger radius. However, if the player is crouching, their footsteps are quieter and it is then possible for them to be near a guard without being detected.</p>

                <h2>Stealth Enemy AI Plugin</h2>

                <p>As part of additional preparation for the upcoming Ubisoft Game Lab, I am currently working on turning this AI work into a modular plugin that allows for easy integration into other projects.</p>
            </div>

            <div className="project-link-section">
                <a className="link-button" href="https://github.com/Ayduria/LocationFilm" target="_blank" rel="noopener noreferrer">
                    <img
                        alt="itch.io logo"
                        className="inline-block w-6 mr-2 mb-1"
                        src="./img/icons/github.svg"
                    />
                    View the repository
                </a>
            </div>

            <div className="project-section">
                <h1>Design challenges</h1>
                <h2>Replication</h2>
                <p>Because the game is online multiplayer, a layer of difficulty is added with replication, especially when the game is developed over a short period of time. During the jam part of development in particular, we often had features working perfectly on the server side, but causing problems on the client side, the generation of the guards' vision cone being one of them.</p>

            </div>

            <div className="project-link-section">
                <a className="link-button" href="https://zaksley.itch.io/droid-rush" target="_blank" rel="noopener noreferrer">
                    <img
                        alt="itch.io logo"
                        className="inline-block w-6 mr-2 mb-1"
                        src="./img/icons/itch-io.png"
                    />
                    Check out the prototype
                </a>
            </div>

            <div className="project-section project-credits">
            <h1>Credits</h1>
            <p>
                Clémence Clavel<br/>
                Laurianna Ferra<br/>
                Jean-Félix Girard<br/>
                Eli Lapointe<br/>
                Lori Lou<br/>
                Patrick McRea Desjardins<br/>
                Enzo Medina<br/>
                Hugo Mora<br/>
            </p>
            </div>
        </div>
    )
}

export default DroidRush;