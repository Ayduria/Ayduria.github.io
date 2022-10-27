// src/components/Projects.js
import "./index.css"
import React from "react"
import { images } from '../Content'
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid"

function Alka( {} ) {
    return (
        <div>
            <div className="project-section">
                <blockquote className="w-3/4 lg:w-1/2">
                    <p>Alka est un jeu de tir à la première personne où 4 joueurs coopéreront en ligne contre l’environnement.  Afin de sauver ce qui reste de l’humanité, les joueurs incarneront des drones pour éliminer les tumeurs et leurs sbires qui tentent d’envahir le bunker.</p>
                </blockquote>
            </div>

            <div className="project-section">
                <h1>Description du projet</h1>
                <p>Alka est un jeu multijoueur en ligne où de 2 à 4 joueurs incarnent des drones armés ayant pour mission d'éliminer une infection se propageant dans un bunker. Pour s'y faire, des nodes doivent être détruits, lesquels sont protégés par divers ennemis.</p>

                <div className="iframe-container">
                    <iframe width="800" height="450" src="https://www.youtube.com/embed/_pX1EpqLWC4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    <style jsx>{`
                        .iframe-container {
                            background-image: url(${ images.LoadingGif });
                        }
                    `}</style>
                </div>

                <p>Le jeu a débuté son développement durant la session d'hiver 2022. Bon nombre d'étudiants de différentes disciplines se sont joints au projet, dont plusieurs programmeurs de l'UQAC. À la fin de cette session, un prototype a été rendu, dont la bande-annonce se trouve ci-dessus. Toutefois, ce n'était pas terminé pour Alka; le jeu a repris son développement en automne 2022. C'est à ce moment qu'on m'a demandé si je voulais me joindre au projet, ce que j'ai accepté avec enthousiasme.</p>
                <p>Sortant de sa phase de prototypage, le projet est présentement dans sa phase de préproduction, qui s'étendra jusqu'à la fin de la session. Il se poursuivra par la suite en production durant la session d'hiver 2023.</p>
            </div>

            <div className="project-section">
                <h1>Mon implication</h1>
                <p>Mon arrivée dans l'équipe d'Alka étant très récente, je n'ai pas encore eu l'occasion de faire de contribution majeure. Je vais travailler sur le projet durant les mois à venir.</p>
                <p>Pour l'instant, le focus est principalement sur l'analyse et la compréhension des éléments déjà existants du projet ainsi que le nettoyage et les préparatifs pour les nouveaux ajouts à venir. J'assiste régulièrement à des rencontres avec les autres programmeurs de mon équipe, durant lesquelles des discussions ont lieu sur l'AI des ennemis existants et à venir ainsi que les nouveaux systèmes qui seront implémentés.</p>
                <img
                    className=""
                    src="./img/projects/alka_ai_plan.jpg"
                />
                <h2>AI des ennemis</h2>
                <p>Au cours du projet, je vais surtout travailler sur l'AI des ennemis. Cela implique d'abord l'amélioration de l'AI des ennemis déjà existants, soit un sniper attaquant les joueurs de loin et un petit ennemi flottant pourchassant les joueurs. Plus tard durant le développement, un ennemi tank sera ajouté dans le jeu.</p>
            </div>

            <div className="project-section">
                <h1>Défis de conception</h1>
                <h2>Jeu multijoueur</h2>
                <p>Alka est ma première expérience de programmation de jeu multijoueur en ligne. Comme j'ai pu le constater, cela augmente la complexité du développement, exigant plusieurs éléments à mettre en place pour un fonctionnement fluide et optimal. Je devrai donc apprendre à mesure que je travaille sur le projet, ce qui prouvera être un défi de taille mais aussi très instructif. Dans le contexte de mon travail sur l'AI, il sera notamment très important que les actions des différents ennemis soient correctement reflétées dans les instances de jeu de chaque joueur.</p>
            </div>

            <div className="project-link-section">
                <a className="link-button" href="https://uqac.itch.io/alka" target="_blank">
                    <img
                        className="inline-block w-6 mr-2 mb-1"
                        src="./img/icons/itch-io.png"
                    />
                    Voir le prototype
                </a>
            </div>
        </div>
    )
}

export default Alka;