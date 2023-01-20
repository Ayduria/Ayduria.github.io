// src/components/Projects.js
import "./index.css"
import React from "react"

function AsteroidField( {} ) {
    return (
        <div className="project-page">
            <div className="project-section">
                <h1>Project description</h1>
                <p>Made as part of a course exercise, Asteroid Field, under its unofficial name, is a microgame in which the player controls a spaceship in space</p>

                <p>The ship moves through a huge field of thousands of moving asteroids and must shoot at them to destroy them.</p>
                
            </div>

            <div className="project-section">
                <h1>My involvement</h1>

                <h2>Object instantiator</h2>
                <p>I implemented a custom inspector window in the engine allowing to instantiate in the scene a certain number of an object, at the root or children of a given parent.</p>

                <img
                    alt="Object spawner window"
                    className="w-24 mb-5"
                    src="./img/projects/object-spawner-window.jpg"
                />

                <p>Other than the number of objects, this window also allows to modify other spawn parameters including the prefix of the instantiated objects, the maximum distance at which they can be instantiated and an interval determining their minimum and maximum size.</p>

                <p>It is also possible to consult the number of objects that have already been instantiated and reset this number, deleting all the objects already instantiated in the scene.</p>

                <p>It is via this window that I instantiated the 5000 asteroids found in the game.</p>

                <h2>Job System implementation</h2>
                <p>An important part of this exercise was to familiarize outselves with the Unity Job System. As the game features 5000 asteroids moving independently of each other, this was essential to maintain acceptable performance and framerate.</p>

                <img
                    alt="Asteroids moving"
                    className="w-24 mb-5"
                    src="./img/projects/asteroids-rising.gif"
                />

                <p>The asteroids' movement is therefore carried out on two different threads; one is reponsible for calculating the velocity, acceleration and rotation of each asteroid, while the other is responsible for updating the position of the asteroids by applying transformations to them.</p>

                <img
                    alt="Asteroids moving"
                    className="w-24 mb-5"
                    src="./img/projects/asteroid-jobs.jpg"
                />

                <p>Thus ,the calculations and transformations occuring simultaneously on two different threads, 5000 adteroids move on the screen as the same time in a non-uniform way and the game remains fluid all the same.</p>

                <h2>Destruction of asteroids</h2>

                <p>I did not implement the shooting system, however I implemented the health system that every asteroid has.</p>

                <img
                    alt="Asteroids shooting"
                    className="w-24 mb-5"
                    src="./img/projects/asteroid-shooting.gif"
                />

                <p>By default, the health bar is hidden. When an asteroid is hit by a projectile, it appears. After two projectiles, the asteroid is destroyed in an explosion, lowering the total number of asteroids in the scene as indicated at the top of the screen.</p>

                
            </div>

            <div className="project-section">
                <h1>Design challenges</h1>
                <h2>Performance</h2>
                <p>Maintaining a good framerate was not easy during this exercise. In addition to the implementation of multithreading, I had to optimize the models and textures of the asteroids as much as possible so that they affected performance as little as possible.</p>
            
            </div>

            <div className="project-link-section">
                <a className="link-button" href="https://github.com/Ayduria/UQAC-8PRO135-unity" target="_blank" rel="noopener noreferrer">
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
                Patrick McRea-Desjardins</p>
            </div>
        </div>
    )
}

export default AsteroidField;