// src/components/Projects.js
import "./index.css"
import React from "react"
import { images } from '../Content'

function Alka( {} ) {
    return (
        <div className="project-page">
            <div className="project-section">
                <blockquote className="w-3/4 lg:w-1/2">
                    <p>Alka is a first person shooter where 4 players cooperate online against the environment. In order to save what is left of humanity, players will embody drones to eliminate the tumors and their minions trying to invade the bunker.</p>
                </blockquote>
            </div>

            <div className="project-section">
                <h1>Project description</h1>
                <p>ALKA is an online multiplayer game where 2 to 4 players embody armed drones whose mission is to eliminate an infection spreading in a bunger. To do so, nodes must be destroyed, which are protected by various enemies.</p>

                <div className="iframe-container">
                    <iframe width="800" height="450" src="https://www.youtube.com/embed/_pX1EpqLWC4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    <style jsx>{`
                        .iframe-container {
                            background-image: url(${ images.LoadingGif });
                        }
                    `}</style>
                </div>

                <p>The game began its development during the winter 2022 semester. A good number of students from various disciplines joined the project, including several UQAC programmers. By the end of this semester, a prototype was delivered, the trailer of which can be found above. However, it was not over for ALKA; the game resumed development in the fall of 2022. That is when I was asked if I wanted to join the project, which I enthusiastically accepted.</p>

                <p>Following its prototyping phase, the project completed its pre-production phase, which I worked on for a whole semester. I then embarked on the project for another semester in spring of 2023, during which the production phase began.</p>
            </div>

            <div className="project-link-section">
                <a className="link-button" href="https://uqac.itch.io/alka" target="_blank" rel="noopener noreferrer">
                    <img
                        alt="itch.io logo"
                        className="inline-block w-6 mr-2 mb-1"
                        src="./img/icons/itch-io.png"
                    />
                    Check out the first prototype
                </a>
            </div>

            <div className="project-section">
                <h1>My involvement</h1>
                <p>Since the project was already well underway when I arrived, a good chunk of pre-production consisted of exploring and analyzing the systems already in place. It was then decided that I would work on AI, having already had interest and experience in this direction on other projects.</p>

                <h2>Sniper AI</h2>
                
                <p>I attended several meetings with the other programmers on my team. Together, we first brainstormed different ways to improve the AI of enemies already in the game and then made some schematics representing the desired behaviors. I volunteered to work on an enemy in particular, the sniper.</p>

                <img
                    alt="AI behavior plan drawing"
                    src="./img/projects/alka_ai_plan.jpg"
                />

                <p>The basic behavior of the sniper can be explained simply: it does not move on a navmesh, but rather teleports from areas to areas, placed by hand in the levels, calculating the priority of each area nearby according to criteria appropriate to the situation. When it spots a player, it attacks them with projectiles.</p>

                <p>When I joined the project, the basic system was already well implemented, but the sniper did not have much variety in its behavior: after spawning near a node, it would move away from it and then remain in this new area, engaging in a duel to the death with the player when the latter approached. So I worked on diversifying its behavior according to what had been established in the team.</p>

                <video className="mt-8 mb-8" controls>
                    <source src="./img/projects/sniper-ai-gym.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>

                <p>I improved some behaviors already present in addition to adding new ones. These behaviors can be configured with maximum/minimum distances as appropriate.</p>

                <h3>Initial distribution</h3>
                <p>The sniper already had a behavior that consisted of moving away from the node after spawning at the start of the game. However, its choice of area was rather random. I improved this behavior by adding a distance calculation that gives more priority to reacheable areas furthest from the current area of the sniper.</p>

                <h3>Stalking</h3>
                <p>I added a stalking behavior to the sniper to make the fight against this enemy more dynamic. When the sniper spots a player, it enters the ground and teleports close to that player without going too close. It repeats this behavior after a while, thus moving to attack the player from different positions.</p>

                <h3>Fleeing</h3>
                <p>I also added a fleeing behavior to the sniper. When the sniper is sufficiently injured, it re-enters the ground and teleports to an area away from the player. The injury system was already partially implemented but unused, so I made it functional and used it as a basis for the behavior.</p>
                        
                <h2>Tank AI</h2>

                <p>During the initial enemy brainstorm phase, we had also drafted out the behavior for a new enemy : the tank. This huge beast would protect the node and charge at any player attempting to approach. This enemy remained nothing but an idea during the prototyping phase, however.</p>

                <img
                    alt="AI behavior plan drawing"
                    src="./img/projects/alka_tank_ai.jpg"
                />

                <p>The implementation of the tank began in the production phase, during my second semester on the project. I took on the task, eager to start working on something new.</p>
                
                <video className="mt-8 mb-8" controls>
                    <source src="./img/projects/TankVideo.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>

                <h3>Guarding</h3>

                <p>When no player is in proximity of the node, I implemented a guarding behavior on the tank. It heads for the spot in front of the node's weakpoint and then lays down, protecting both the node's weakpoint as well as its own : during this phase, the tank is invulnerable and cannot be killed.</p>

                <h3>Attacking</h3>

                <p>As soon as a player gets within a certain range of the node, the tank wakes up from its slumber and switches to another behavior I implemented, which is the attack. It locks onto its target and charges towards it, attacking with a goo splatter as soon as it gets in range. If the player wanders too far from the node, the tank abandons the chase and returns to its guarding behavior.</p>

                <p>During this phase, the tank is no longer invulnerable. However, the only way to kill it is by shooting the weakpoint on its back. This requires cooperation from the players, as one has to draw its attention for another player to go behind it and shoot at its vulnerable spot.</p>

            </div>

            <div className="project-section">
                <h1>Design challenges</h1>
                <h2>Online multiplayer game</h2>
                <p>ALKA was my first online multiplayer game programming experience. As I could see, this increases the complexity of development, requiring several elements to be put in place for smooth and optimal functioning. Thus, I had to learn as I worked on the project, which proved to be quite a challenge but also very instructive. In the context of my AI work, it was particularly important that the actions of the various enemies were correctly reflected in the game instances of each player.</p>

                <h2>Adaptation to a project already started</h2>
                <p>When I joined the team, the project was already well under way. Also, the vast majority of programmers who were on the project the previous semester were no longer there. So there was a certain period of adjusment where I had to analyze the code and the funcioning of the project in order to make additions and modifications.</p>

            </div>

            <div className="project-section project-credits">
            <h1>Credits</h1>
            <h2>NAD Artists</h2>
            <p>
                Alexandre Bonin<br/>
                Cyril Beze<br/>
                Émilie Lavoie<br/>
                Issam Aloulou<br/>
                Jérémie Auclair<br/>
                Julien Berthier<br/>
                Qian Ting Zhang<br/>
                Vincent Gagnon<br/>
                Karîm Désir<br/>
                William van Herck<br/>
                Laurence Cloutier<br/>
                Félix Lemonde-Champagne<br/>
                Hugo Babin<br/>
                Alexandre Mignot<br/>
                Vincent Dupéron<br/>
                Virginie Juteau<br/>
                François Chiasson<br/>
                Samuel Gauthier Cyr<br/>
                Natalya Fedorenko<br/>
                Nickolas Ménard<br/>
                Alexandre Ruel<br/>
            </p>
            <h2>DIM Programmers</h2>
            <p>
                Adrien Garbani<br/>
                Clément Chastaingt<br/>
                Jean-Sébastien Boutin<br/>
                Léonard Rizzo<br/>
                Marc-Antoine Lebel<br/>
                Samuel Potvin<br/>
                Thomas Bergeron<br/>
                Patrick McRea-Desjardins<br/>
                Eli Lapointe<br/>
                Minh-Qhan Bui<br/>
                Pierre-Jean Morel<br/>
                
            </p>
            <h2>UdeM Musicians</h2>
            <p>
                Eliazer Kramer<br/>
                Evan Burman<br/>
                Antoine Lussier<br/>
                Tyrai Laughton<br/>
            </p>
        </div>
        </div>
    )
}

export default Alka;