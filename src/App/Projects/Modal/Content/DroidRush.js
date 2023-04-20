// src/components/Projects.js
import "./index.css"
import React from "react"

function DroidRush( {} ) {
    return (
        <div className="project-page">
            <div className="project-section">
                <h1>Description du projet</h1>
                <p>Droid Rush est un jeu top-down de stratégie et d'infiltration où deux joueurs doivent coopérer afin de compléter des niveaux sans se faire repérer par les gardes de sécurité patrouillant les lieux. Des objets peuvent être utilisés afin d'activer des abiletés spéciales, et chaque personnage possède une abileté unique qui lui est propre. Toutefois, un joueur ne peut transporter qu'un objet à la fois !</p>

                <p>Initialement, Droid Rush a commencé en jeu de jam non-officielle de 48 heures avec les thèmes 'Dungeons' et 'Pocket Sized' mais, à la fin de ce jam, nous avons vu du potentiel et convenu de continuer à travailler dessus. Le jeu est présentement toujours en réalisation et sert à l'équipe de préparation pour notre participation au <b>Concours Ubisoft 2023</b> qui débutera bientôt.</p>
                
            </div>

            <div className="project-link-section">
                <a className="link-button mr-4" href="https://zaksley.itch.io/droid-rush" target="_blank" rel="noopener noreferrer">
                    <img
                        alt="itch.io logo"
                        className="inline-block w-6 mr-2 mb-1"
                        src="./img/icons/itch-io.png"
                    />
                    Voir le prototype
                </a>
                <a className="link-button" href="https://github.com/Ayduria/LocationFilm" target="_blank" rel="noopener noreferrer">
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
                <h2>Gardes de sécurité</h2>
                <p>Dans ce projet, je me consacre entièrement aux gardes de sécurité et à leur AI. J'ai réutilisé le système de détection et de patrouille que j'ai conçu dans un autre de mes projets (Lux), mais je les ai adaptés et améliorés en plus d'ajouter de nouveaux comportements.</p>

                <video className="mt-8 mb-8" controls>
                    <source src="./img/projects/droidrush-detection.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>

                <p>Essentiellement, le comportement des gardiens de sécurité peut être résumé ainsi: de base, ils patrouillent ou sont stationnaires. S'ils entendent un bruit, ils deviennent suspicieux et se dirigent vers la source, y restant un moment avant de retourner à leur occupation. Si un joueur rentre dans leur champ de vision, délimité par un cône coloré bloqué par les obstacles généré via un EQS, le joueur est repéré et le niveau recommence.</p>

                <img
                    alt="Guards resuming their watch duty"
                    className="w-24 mb-5"
                    src="./img/projects/droidrush-guards-resuming.gif"
                />

                <p>Un garde peut être paramétré soit en mode stationnaire ou en mode patrouille. En mode stationnaire, il demeure à un endroit fixe et reprend exactement cette position et orientation au retour d'une investigation de bruit. En mode patrouille, il continue sa patrouille au point où il était avant d'être interrompu.</p>

                <img
                    alt="Guards resuming their watch duty"
                    className="w-24 mb-5"
                    src="./img/projects/droidrush-guards-stealth.gif"
                />

                <p>Parmis les bruits auxquels les gardes peuvent réagir se trouvent les bruits de pas. Si le joueur court, ses pas sont plus forts, alertant les gardes autour sur une plus grande zone. Toutefois, si le joueur s'accroupit, ses pas sont moins bruyants et il lui est alors possible d'être à proximité d'un garde sans être détecté.</p>

                <h2>Stealth Enemy AI Plugin</h2>

                <p>Comme préparation supplémentaire pour le Concours Ubisoft qui commence bientôt, je travaille présentement à transformer mon travail d'AI en plugin modulaire qui permettra l'intégration facile dans d'autres projets.</p>
            </div>

            <div className="project-section">
                <h1>Défis de conception</h1>
                <h2>Réplication</h2>
                <p>Le jeu étant multijoueur en ligne, une couche de difficulté s'ajoute avec la réplication, surtout lorsque le jeu est réalisé sur une courte période de temps. Particulièrement durant la partie jam du développement, il nous est souvent arrivé d'avoir des fonctionnalités fonctionnant parfaitement du côté serveur, mais posant problème du côté client, par exemple la génération des cônes de vision des gardes.</p>

            </div>

            <div className="project-section project-credits">
            <h1>Crédits</h1>
            <p>
                Clémence Clavel<br/>
                Laurianna Ferra<br/>
                Jean-Félix Girard<br/>
                Eli Lapointe<br/>
                Lori Lou<br/>
                Patrick McRea Desjardins<br/>
                Enzo Medina<br/>
                Hugo Mora<br/>
            </p>
            </div>
        </div>
    )
}

export default DroidRush;