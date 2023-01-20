// src/components/Projects.js
import "./index.css"
import React from "react"
import { images } from '../Content'

function Lux( {} ) {
    return (
    <div className="project-page">
        <div className="project-section">
                <blockquote className="w-3/4 lg:w-1/2">
                    <p>You are our hope for a normal life, our light.</p>
                </blockquote>
            </div>

        <div className="project-section">
            <h1>Project description</h1>
            <p>Lux is a third-person 3D platformer game in which the player embodies a humanoid cat with the mission of saving the wild animals of the city from harmful lights. This is a serious game whose objective is to make players aware of the phenomenon of light pollution.</p>

            <div className="iframe-container">
            <iframe width="800" height="450" src="https://www.youtube.com/embed/FkqtGrqJGW4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <style jsx>{`
                    .iframe-container {
                        background-image: url(${ images.LoadingGif });
                    }
                `}</style>
            </div>

            <h2>Pre-production</h2>
            <p>During the first semester on the project, we had a pre-production phase during which we worked on various elements including:</p>
            <ul>
                <li>Research on the problem of light pollution</li>
                <li>Realization of three One Pagers</li>
                <li>Two prototypes developed in two weeks each</li>
                <li>Post-mortem and production plan</li>
            </ul>

            <h2>Production</h2>
            <p>The production phase, during which we made the complete game, took place during the second semester of work on the project. The progress was made by two-week sprints interspersed with scrum meetings and sprint reviews in which the progress on our user stories was evaluated.</p>
            
        </div>

        <div className="project-section">
            <h1>My involvement</h1>
            <h2>Dialogue system</h2>
            <p>Over the course of the game, Lux chats with various animals, who explain their situations to her and give her goals through a dialogue system.</p>
            <img
                    alt="Dialogue with Candela"
                    className="w-24 mb-5"
                    src="./img/projects/lux-dialogue.gif"
            />

            <p>I made this entire dialogue system. The latter is entirely dynamic, changing according to the character being spojen to and displaying its corresponding lines of dialogue via a data table.</p>

            <img
                    alt="Dialogue data table"
                    className="w-24 mb-5"
                    src="./img/projects/dialogue-table.jpg"
            />

            <p>This data table contains all dialog lines and the dialog part to which they belong. It is also possible to assign an event to each dialog line, which is called when this line appears; for example, in the dialog above, the second line reveals Candela's name in the dialog box.</p>

            <h2>Drones</h2>
            <p>In areas where Lux needs to do platforming, drones patrol the streets to discourage anyone from passing by. I was in charge of the AI of these drones.</p>

            <img
                    alt="Drones behavior tree"
                    className="w-24 mb-5"
                    src="./img/projects/sentinel-tree.jpg"
            />

            <p>By default, drones patrol from point to point, which are assigned to it in the editor. I started by implementing this basic behavior, which can be done in two different ways: iterate through the points in a loop, or back and forth.</p>

            <img
                    alt="Drones patrolling"
                    className="w-24 mb-5"
                    src="./img/projects/lux-sentinel-patrol.gif"
            />

            <p>I then tackled their perception and chase behavior. If the drones detect Lux, they go into alert mode, then quickly into chase mode if the player does not hide fast enough. If the player manages to escape, the drone will stay in alert mode and search around for Lux for a while before resuming its patrol.</p>

            <img
                    alt="Drones chasing"
                    className="w-24 mb-5"
                    src="./img/projects/lux-sentinel-alert.gif"
            />

            <p>If the drone is close enough to Lux and has her in sight, it will begin charging its attack, freezing Lux in place briefly. Once the attack has charged, the drone attacks with a short burst of powerful light, returning Lux to her last checkpoint. The drone then continues its patrol.</p>

            <img
                    alt="Drones chasing"
                    className="w-24 mb-5"
                    src="./img/projects/lux-sentinel-attack.gif"
            />

            <p>In addition to visual perception, I also implemented auditory perception on the drones. If Lux approaches a drone from behind too closely, the drone will hear hear her and immediately turn around in alert.</p>
            
        </div>

        <div className="project-section">

            <h1>Design challenges</h1>
            <h2>Quick learning</h2>
            <p>Before starting this project, I had never done a C++ project in Unreal nor used Perforce, and so I had to learn as I worked. The other programmers were also mostly in the same situation, and we encountered a lot of problems in the early stages of the project. We eventually became much more comfortable and efficient.</p>

            <h2>Large multidisciplinary team</h2>
            <p>This project was my first experience of working not only in such a large team, but also in a multidisciplinary team made: it was made up of programmers from the DIM in Chicoutimi and artists from the NAD in Montreal. Good communication was essential to coordinate our work and understand each others well.</p>
        </div>

        <div className="project-section project-credits">
            <h1>Credits</h1>
            <h2>NAD Artists</h2>
            <p>Virginie Juteau<br/>
                François Chiasson<br/>
                Marie-Ève Côté<br/>
                Jonathan Larose<br/>
                Marianne Ouellet<br/>
                Andrew Cheng<br/>
                Jade Côté<br/>
                Karîm Désir<br/>
                Alexandre Ruel<br/>
            </p>
            <h2>DIM Programmers</h2>
            <p>Thomas Bergeron<br/>
                Patrick McRea-Desjardins<br/>
                Eli Lapointe<br/>
                Félix Brassard<br/>
            </p>
            <h2>UdeM Musicians</h2>
            <p>Frédérique Le Duc-Moreau<br/>
                Agathe Lavarel<br/>
                David Caron-Proulx<br/>
                Edouard Morcellet<br/>
            </p>
        </div>
    </div>
    )
}

export default Lux;