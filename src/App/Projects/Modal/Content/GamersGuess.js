// src/components/Projects.js
import "./index.css"
import React from "react"
import { images } from '../Content'

function GamersGuess( {} ) {
    return (
        <div className="project-page">
            <div className="project-section">
                <h1>Description du projet</h1>

                <p>Réalisée en équipe de deux dans le cadre d'un cours d'informatique mobile, Gamer's Guess est une application mobile Android qui teste les connaissances des joueurs sur les jeux vidéo via des quiz de difficulté variée.</p>
                <p>La vidéo ci-dessous démontre en détail le fonctionnement de l'application.</p>

                <div className="iframe-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/tZZvvv6Bq_4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    <style jsx>{`
                        .iframe-container {
                            background-image: url(${ images.LoadingGif });
                        }
                    `}</style>
                </div>
                
            </div>

            <div className="project-link-section">
                <a className="link-button" href="https://github.com/Ayduria/GamersGuess" target="_blank" rel="noopener noreferrer">
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
                <h2>Création de la base de données</h2>
                <p>J'ai créé une base de données pour l'application contenant toutes les questions et leurs réponses classées par difficulté ainsi que les scores du leaderboard, ces derniers étant dynamiques et s'ajoutant à mesure que le ajoute de nouveaux scores.</p>

                <h2>Mécanique de quiz</h2>
                <p>J'ai implémenté la mécanique principale de quiz. Cela impliquait d'abord d'aller chercher les bonnes questions selon la difficulté choisie ainsi que leurs choix de réponse. Ensuite, j'ai programmé le système permettant d'afficher toutes les questions de la difficulté dans un ordre aléatoire, la prochaine question s'affichant soit quand le joueur appuie sur une réponse ou lorsque le temps pour la question est écoulé.</p>

                <img
                    alt="Gamers Guess quiz"
                    className="w-24 mb-5"
                    src="./img/projects/gg-answers.jpg"
                />

                <p>J'ai d'ailleurs aussi mis en place une vérification de réponse afin de déterminer si la réponse que le joueur a choisie est la bonne ou la mauvaise.</p>

                <h2>Score et leaderboard</h2>

                <p>J'ai mis en place un système calculant le score à mesure que le joueur progresse dans un quiz. Différents facteurs entrent en jeu dont le nombre de mauvaises réponses, le nombre de bonnes réponses consécutives et le temps pour répondre à chaque question.</p>

                <img
                    alt="Gamers Guess leaderboard"
                    className="w-24 mb-5"
                    src="./img/projects/gg-leaderboard.jpg"
                />

                <p>À la fin du quiz, j'ai conçu un écran de score indiquant au joueur son score final ainsi que s'il s'agit d'un nouveau highscore. Le joueur y a alors l'option d'entrer son nom pour ajouter son score au leaderboard, ce qui l'ajoute dynamiquement dans la base de données.</p>

                <p>Finalement, j'ai implémenté un écran de leaderboard que le joueur peut consulter pour voir tous les scores y ayant été ajoutés en ordre décroissant.</p>
                
            </div>

            <div className="project-section">
                <h1>Défis de conception</h1>
                <h2>Environnements de test différents</h2>
                <p>Alors que je testais sur mon vrai téléphone Android, mon coéquipier testait sur un émulateur Android. Cela nous a, à quelques reprises, causé des difficultés, l'émulateur présentant des problèmes que mon téléphone ne montrait pas et vice-versa. Nous avons effectué de très nombreux tests dans les deux environnements ainsi que sur différents émulateurs pour être certains que l'application fonctionnait comme il se doit.</p>
            
            </div>

            <div className="project-section project-credits">
            <h1>Crédits</h1>
                <p>Eli Lapointe<br/>
                Patrick McRea-Desjardins</p>
            </div>
        </div>
    )
}

export default GamersGuess;