// src/components/Projects.js
import "./index.css"
import React from "react"

function TimeSwap( {} ) {
    return (
        <div className="project-page">
            <div className="project-section">
                <blockquote className="w-3/4 lg:w-1/2">
                    <p>Dans un futur distant, deux amis décident de s'éloigner de la ville et de faire une petite escapade de camping sauvage. Cependant, un être avec des intentions mystérieuses les envoie de force dans un autre monde avec un artefact de sablier magique.</p>
                </blockquote>
            </div>
            <div className="project-section">
                <h1>Description du projet</h1>
                <p>Time Swap est un jeu réalisé en 48 heures dans le cadre du WonderJam UQAC Automne 2021. Le thème de cette édition était "Connexion".</p>
                <p>Ce que nous avons produit est un jeu d'arcade fast-paced dans lequel le joueur doit constamment alterner entre deux personnages dans deux mondes parallèles défilant à l'infini.</p>
                <p>Notre jeu a remporté la deuxième position ainsi que le choix du public.</p>
            </div>

            <div className="project-section">
                <h1>Mon implication</h1>
                <h2>Système de score</h2>

                <p>J'ai implémenté le système de score du jeu. À la base, à la manière classique d'un jeu d'arcade, plus le joueur survit longtemps, plus son score augmente. Ici, à chaque seconde de survie, le score est incrémenté et est affecté par un multiplicateur qui augmente constamment tant que le joueur ne change pas de personnage. Donc, plus le joueur reste longtemps avec le même personnage, mettant l'autre à risque, plus ses points sont multipliés.</p>

                <p>J'ai fait afficher les points totaux et le multiplicateur au centre de l'écran, ainsi que le timer indiquant le temps de survie.</p>

                <img
                    alt="Score system"
                    className="w-24 mb-5"
                    src="./img/projects/time-swap-score.gif"
                />

                <p>Lorsque le joueur perd, son score lui est affiché ainsi que son meilleur score, si ce dernier n'a pas été battu. Chaque fois que le meilleur score est battu, le nouveau meilleur score est enregistré et conservé même si le joueur quitte le jeu. Le temps de survie est aussi affiché.</p>

                <h2>Cinématique</h2>
                <p>J'ai mis en place une courte cinématique au début du jeu. Il s'agissait de ma première expérience en cinématique dans un jeu.</p>
                <img
                    alt="Cutscene"
                    className="w-24 mb-5"
                    src="./img/projects/time-swap-cutscene.gif"
                />
                
            </div>

            <div className="project-section">
                <h1>Défis de conception</h1>
            
            </div>

            <div className="project-link-section">
                <a className="link-button mr-4" href="https://original-crab-interactive.itch.io/timeswap" target="_blank" rel="noopener noreferrer">
                    <img
                        alt="itch.io logo"
                        className="inline-block w-6 mr-2 mb-1"
                        src="./img/icons/itch-io.png"
                    />
                   Voir le jeu
                </a>
                <a className="link-button" href="https://github.com/Ayduria/WonderJam-A2021" target="_blank" rel="noopener noreferrer">
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
                <p>Ann-Laurie Lapointe<br/>
                Vivianne Tremblay<br/>
                Christopher Tremblay<br/>
                Lionel Blanchis</p>
            </div>
        </div>
    )
}

export default TimeSwap;