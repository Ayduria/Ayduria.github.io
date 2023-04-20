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

            <p>After School is a third-person shooter game that can be played solo or in split-screen co-op. The player plays as a kid running around in a huge playground, shooting waves of enemies with a water gun and accumulating as high a score as possible.</p>

            <p>The game was developed over the course of 10 weeks as a submission to the <b><a className="text-white" href="https://montreal.ubisoft.com/en/our-commitments/education/game-lab-competition/" target="_blank">2023 Ubisoft Game Lab Competition</a></b> under the theme <b>'Arcade'</b>. It also had to respect the following constraints : </p>

            <ul>
                <li>An online scoreboard</li>
                <li>At least one destruction mechanic and one creation mechanic</li>
                <li>At least one interactive gravity modulation element</li>
                <li>Two concept art elements</li>
                <li>At least 10 minutes of gameplay</li>
            </ul>

            <p>You can check out a short gameplay video showcasing the result of our work here :</p>

            <div className="iframe-container">
            <iframe width="800" height="450" src="https://www.youtube.com/embed/yiSYxplhak0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <style jsx>{`
                    .iframe-container {
                        background-image: url(${ images.LoadingGif });
                    }
                `}</style>
            </div>

            <p>The game was showcased all day at the Ubisoft Montreal studio on April 13th, 2023, along with many other games participating in the competition. Many people got to play and enjoy our game, as well as jury members.</p>

            <img
                alt="All team members of Green Bear"
                className="w-24 mb-5"
                src="./img/projects/afterschool-team.jpg"
            />
            
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

        <div className="project-section">
            <h1>My involvement</h1>
            <h2>Enemies</h2>

            <p>I was the AI programmer on the team, and so the waves of enemies running on the screen at all times occupied most of my time working on this project. It was crucial for the enemies' behavior to be fun and polished, as fighting against them is at the core of After School's gameplay.</p>

            <img
                alt="Crowds of enemies"
                className="w-24 mb-5"
                src="./img/projects/afterschool-enemies.gif"
            />

            <h3>Crowd Management</h3>

            <p>One of my main challenges was to make the enemies move together naturally as a cohesive group. In the beginning, after programming their basic chase and attack, they all ran around in a single file, which offered for quite a boring gameplay.</p>

            <p>The first thing I did was to use the resources at hand and use Unreal's crowd following AI. This way, they stopped bumping into each others all the time and started spreading around in a much more natural way as they chased the player. That was a good start, but I felt like something was still missing. Once enemies started attacking the player, they remained in the same spot, and I started delving into the issue.</p>

            <img
                alt="Enemy strafe debug lines"
                className="w-24 mb-5"
                src="./img/projects/afterschool-strafe.gif"
            />

            <h3>Strafe</h3>

            <p>This leads to the second main thing I implemented for a more natural enemy behavior : strafing. As the enemies attacked the player, I wanted them to move around from left to right, adding a lot more dynamism to their attack and allowing them to dodge some shots.</p>

            <p>As a solution, I made them frequently get a new position around the player by calculating the hypothenuse of a right triangle using their attack range and forward vector facing the player. I then set them up to always face the player during this action.</p>

            <h2>Outlines</h2>

            <p>Another important thing I worked on during this project is outlining certain important actors using the <b><a className="text-white" href="https://www.unrealengine.com/marketplace/en-US/product/outliner-and-symbol-system" target="_blank">Hyper Outliner and Symbol System</a></b> as outline shader to save implementation time. This was a feature requested by some playtesters who had trouble seeing important items on the screen.</p>

            <img
                alt="Outline around pinata"
                className="w-24 mb-5"
                src="./img/projects/afterschool-outlines.jpg"
            />

            <p>Many things are outlined to draw attention. Examples include fountains having a blue outline, spider eggs having a red outline and, as shown above, piñatas having a gold outline. Loot dropping from enemies also has a gold outline, making players want to pick them up even more.</p>

            <p>The way I implemented them, the outlines appear and disappear based on the player's distance so as not to clutter the screen. Certain elements, such as pumpkins, have a much wider outline range for the player to see them easily from afar during the nightmare wave.</p>

            <h2>Reactive NPCs</h2>

            <p>As the project drew to an end, one of the last major things I worked on was the NPCs standing outside the playground. The world felt empty, and NPCs that reacted to the players' success was exactly what the game needed.</p>

            <img
                alt="NPCs cheering from the sidelines"
                className="w-24 mb-5"
                src="./img/projects/afterschool-crowd.gif"
            />

            <p>By default, NPCs are simply idle, occasionally doing some idle breakers such as looking around or stretching their arms. When a wave is cleared, they cheer enthusiastically, motivating the player. During a nightmare wave, they start cowering, terrified, increasing the player's fear and making the world feel more alive.</p>

            <h3>Optimization</h3>

            <p>As the game already had a lot going on with all the items and enemies appearing, the NPCs had to have no major impact on performance. I spent a lot of time optimizing them and their animations, essentially making them animated objects and not full-fledged characters. After all, the player would never have any interaction with them, and so they did not need things such as collisions or physics interactions.</p>
            
        </div>

        <div className="project-section">

            <h1>Design challenges</h1>

            <h2>No artists</h2>

            <p>In our team of 8 students, we had 1 game designer and 7 programmers for a total of 0 artists. As a result, the pressure was on to have very fun and polished features. We also needed to keep a coherent artstyle as we added assets from various places to our project.</p>

            <h2>Performance</h2>

            <p>Over the course of the project, as more and more elements were added, performance started to drop until it became noticeable, especially in later waves where enemies are abundant. We started optimizing as much as we could : collisions, textures, animations, number of enemies spawning at once, etc. In the end, we managed to keep a decent framerate in the game's worst conditions for performance, which are co-op play in late waves where ranged enemies are shooting from all directions.</p>

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