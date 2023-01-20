// src/components/Projects.js
import "./index.css"
import React from "react"

function FeatureHunter( {} ) {
    return (
        <div className="project-page">
            <div className="project-section">
                <blockquote className="w-3/4 lg:w-1/2">
                    <p>Un groupe de hacker international a pris contrôle du web et a infecté l’ensemble des jeux hébergés sur itch.io avec des « features » indésirables. Vous aurez comme mission de parcourir ces jeux afin d’identifier et d’éliminer ces ajouts malveillants.</p>
                </blockquote>
            </div>
            <div className="project-section">
                <h1>Description du projet</h1>
                <p>Feature Hunter est un jeu de tir à la première personne réalisé en 48 heures dans le cadre du WonderJam UQAC Automne 2022. Le thème de cette édition était "It's not a bug, it's a feature". Notre équipe ayant des membres possédant beaucoup d'expérience en programmation de jeux, nous avons participé hors-concours.</p>

                <p>Nous avons opté pour un jeu où le joueur incarne un agent ayant pour mission de trouver et d'identifier des objets aux comportements inhabituels et de les éliminer.</p>
                
            </div>

            <div className="project-section">
                <h1>Mon implication</h1>
                <h2>Glitch visuel</h2>

                <p>Les objets peuvent effectuer divers glitch, et j'ai implémenté deux d'entre eux. Le premier consiste en l'objet devenant "invalide" et se transformant, pour une durée aléatoire, en un gros symbole ERROR.</p>

                <img
                    alt="Error glitch"
                    className="w-24 mb-5"
                    src="./img/projects/fh-error.gif"
                />

                <p>Le deuxième consiste en l'objet perdant sa texture, qui est remplacée brièvement par une autre texture aléatoire parmis un array associé à ce glitch.</p>

                <img
                    alt="Missing texture glitch"
                    className="w-24 mb-5"
                    src="./img/projects/glitch2.jpg"
                />

                <h2>Boss final</h2>

                <p>Dans le dernier niveau du jeu, un mannequin peut être trouvé à l'intérieur du château. Ce dernier se déplace et glitch lorsque le joueur ne le regarde pas et cesse de bouger dans le cas contraire.</p>
                <img
                    alt="King feature"
                    className="w-24 mb-5"
                    src="./img/projects/king-feature.gif"
                />
                <p>Après avoir attaqué le mannequin, ce dernier disparaît. Il est en fait téléporté à un point aléatoire sur la map et commence immédiatement à pourchasser le joueur lorsque ce dernier ne le regarde pas. À chaque tir, cela se répète, la vitesse du mannequin augmentant à chaque fois. Après cinq tirs, le boss est vaincu.</p>

                <p>Si le mannequin arrive suffisamment près du joueur, il va l'attaquer et immédiatement se téléporter à nouveau.</p>
                
            </div>

            <div className="project-section">
                <h1>Défis de conception</h1>  
                <h2>Imprévisibilité</h2>
                <p>Vu le principe de base de notre jeu, c'est-à-dire des objets qui glitch aléatoirement, plusieurs problèmes récurrents revenaient, par exemple des objets qui bloquent des portes, ou alors des objets emboîtés l'un dans l'autre. Considérant le thème de la jam, ce n'était généralement pas un problème majeur. Il a tout de même fallu, tout au long de la jam, ajuster les glitch pour atteindre une bonne balance entre chaos et fun.</p>
            </div>

            <div className="project-link-section">
                <a className="link-button mr-4" href="https://choccymilk.itch.io/feature-hunter" target="_blank" rel="noopener noreferrer">
                    <img
                        alt="itch.io logo"
                        className="inline-block w-6 mr-2 mb-1"
                        src="./img/icons/itch-io.png"
                    />
                   Voir le jeu
                </a>
                <a className="link-button" href="https://github.com/Maxime26s/WonderJam-A2022" target="_blank" rel="noopener noreferrer">
                    <img
                        alt="itch.io logo"
                        className="inline-block w-6 mr-2 mb-1"
                        src="./img/icons/github.svg"
                    />
                    Voir le répertoire
                </a>
            </div>

            <div className="project-section project-credits">
            <h1>Crédits</h1>
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