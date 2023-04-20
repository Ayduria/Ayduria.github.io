// src/components/Projects.js
import "./index.css"
import React from "react"

function PotionFrenzy( {} ) {
    return (
        <div className="project-page">
            <div className="project-section">
                <blockquote className="w-3/4 lg:w-1/2">
                    <p>Incarnez l'alchimiste fou, Riko. Son seul et unique objectif est de concocter la potion magique ultime, mais il n'a plus toute sa matière grise.</p>
                </blockquote>
            </div>
            <div className="project-section">
                
                <h1>Description du projet</h1>
                <p>Potion Frenzy est un jeu réalisé en 48 heures dans le cadre du WonderJam UQAC Automne 2020. Le thème de cette édition était "Quand la magie tourne mal".</p>

                <p>Dans ce jeu, le joueur doit, à chaque niveau, lire et mémoriser une recette de potion, puis faire cette potion en tirant des ingrédients dans une marmite à partir d'une pile qui ne cesse de grandir. Plus la potion est ratée, plus le personnage devra combattre des ennemis puissants à la fin du timer.</p>
            </div>

            <div className="project-link-section">
                <a className="link-button mr-4" href="https://original-crab-interactive.itch.io/potion-frenzy" target="_blank" rel="noopener noreferrer">
                    <img
                        alt="itch.io logo"
                        className="inline-block w-6 mr-2 mb-1"
                        src="./img/icons/itch-io.png"
                    />
                   Voir le jeu
                </a>
                <a className="link-button" href="https://github.com/Ayduria/WonderJam-A2020" target="_blank" rel="noopener noreferrer">
                    <img
                        alt="itch.io logo"
                        className="inline-block w-6 mr-2 mb-1"
                        src="./img/icons/github.svg"
                    />
                    Voir le répertoire
                </a>
            </div>

            <div className="project-section">
                <h1>Mon implication</h1>
                <h2>Mécanique de tir</h2>
                <p>J'ai implémenté le fonctionnement de l'arme du personnage principal, soit sa baguette magique. Celle-ci est orientée en fonction de la souris et, lorsque le joueur clique, lance un projectile dans la direction du clic.</p>
                <img
                    alt="Shooting"
                    className="w-24 mb-5"
                    src="./img/projects/pf-shooting.gif"
                />

                <h2>Combat contre les ennemis</h2>
                <p>J'ai implémenté le comportement des ennemis à la sortie de la marmite. Ceux-ci se mettent immédiatement à pourchasser le joueur, lui faisant du dégât s'ils le touchent. Le joueur doit les éliminer en leur tirant dessus, ce qui peut prendre plus ou moins de balles dépendamment de la force de l'ennemi.</p>
                <img
                    alt="Fighting enemies"
                    className="w-24 mb-5"
                    src="./img/projects/pf-fighting.gif"
                />
                <p>J'ai également mis en place le système de vie du jeu. Lorsque le joueur prend du dégât, sa barre de vie dans le coin supérieur gauche diminue, changeant de couleur selon le niveau de vie actuel.</p>
                
            </div>

            <div className="project-section">
                <h1>Défis de conception</h1>
                <h2>Peu d'expérience</h2>
                <p>Ce WonderJam était le premier à lequel j'ai participé, et aucun des membres de mon n'équipe n'avait d'expérience en développement de jeux sur Unity. Nous avons donc dû apprendre à mesure.</p>
            
            </div>

            <div className="project-section project-credits">
            <h1>Crédits</h1>
                <p>Eli Lapointe<br/>
                Vivianne Tremblay<br/>
                Christopher Tremblay<br/>
                Lionel Blanchis</p>
            </div>
        </div>
    )
}

export default PotionFrenzy;