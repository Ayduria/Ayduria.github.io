// src/components/Projects.js
import "./index.css"
import React from "react"

function FeatureHunter( {} ) {
    return (
        <div className="project-page">
            <div className="project-section">
                <blockquote className="w-3/4 lg:w-1/2">
                    <p>An international hacker group has taken over the web and infected all games hosted on itch.io with unwanted "features". Your mission will be to go through these games in order to identify and eliminate these malicious additions.</p>
                </blockquote>
            </div>
            <div className="project-section">
                <h1>Project description</h1>
                <p>Feature Hunter is a first-person shooter made in 48 hours as part of WonderJam UQAC Autumn 2022. The theme of this edition was "It's not a bug, it's a feature". Since our team had members experienced in game programming, we participated out of the competition.</p>

                <p>We opted for a game where the player embodies an agent whose mission is to find and idenfity objects with unusual behavior and eliminate them.</p>
                
            </div>

            <div className="project-link-section">
                <a className="link-button mr-4" href="https://choccymilk.itch.io/feature-hunter" target="_blank" rel="noopener noreferrer">
                    <img
                        alt="itch.io logo"
                        className="inline-block w-6 mr-2 mb-1"
                        src="./img/icons/itch-io.png"
                    />
                   Check out the game
                </a>
                <a className="link-button" href="https://github.com/Maxime26s/WonderJam-A2022" target="_blank" rel="noopener noreferrer">
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
                <h2>Visual glitch</h2>

                <p>Objects can perform various glitches, of which I implemented two. The first consists of the object becoming "invalid" and transforming, for a random duration, into a large ERROR symbol.</p>

                <img
                    alt="Error glitch"
                    className="w-24 mb-5"
                    src="./img/projects/fh-error.gif"
                />

                <p>The second consists of the object losing its texture, which is briefly replaced by another random texture from an array attached to this glitch.</p>

                <img
                    alt="Missing texture glitch"
                    className="w-24 mb-5"
                    src="./img/projects/glitch2.jpg"
                />

                <h2>Final boss</h2>

                <p>In the last level of the game, a mannequin can be found inside the castle. The latter moves and glitches when the player is not looking at it and stops moving otherwise.</p>
                <img
                    alt="King feature"
                    className="w-24 mb-5"
                    src="./img/projects/king-feature.gif"
                />
                <p>After attacking the mannequin, it disappears. It is actually teleported to a random point on the map and immediately starts chasing the player when the player isn't looking in its direction. With each shotgun shot, this repeats, with the mannequin's speed increasing each time. After five shots, the boss is defeated.</p>

                <p>If the mannequin gets close enough to the player, it will attack them and immediately teleport again.</p>
                
            </div>

            <div className="project-section">
                <h1>Design challenges</h1>  
                <h2>Unpredictability</h2>
                <p>Given the basic principle of our game, that is to say objects that glitch randomly, several recurring problems came up, for example objects that block doors, or objects nested inside one another. Considering the theme of the gam, that wasn't usually a major issue. All the same, throughout the jam, we had to adjust the glitches to achieve a good balance between chaos and fun.</p>
            </div>

            <div className="project-section project-credits">
            <h1>Credits</h1>
                <p>Eli Lapointe<br/>
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