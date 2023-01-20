// src/components/Projects.js
import "./index.css"
import React from "react"

function AsteroidField( {} ) {
    return (
        <div className="project-page">
            <div className="project-section">
                <h1>Description du projet</h1>
                <p>Réalisé dans le cadre d'un exercice de cours, Asteroid Field, sous son nom non-officiel, est un micro-jeu dans lequel le joueur contrôle un vaisseau spatial dans l'espace.</p>

                <p>Le vaisseau se déplace au travers un immense champ de milliers d'astéroïdes en mouvement et doit tirer sur ces derniers pour les détruire.</p>
                
            </div>

            <div className="project-section">
                <h1>Mon implication</h1>

                <h2>Instanciateur d'objets</h2>
                <p>J'ai implémenté une fenêtre d'inspecteur personnalisé dans l'engine permettant d'instancier dans la scène un certain nombre d'un objet, à la racine ou enfants d'un parent donné.</p>

                <img
                    alt="Object spawner window"
                    className="w-24 mb-5"
                    src="./img/projects/object-spawner-window.jpg"
                />

                <p>Autre que le nombre d'objets, cette fenêtre permet également de modifier d'autres paramètres de spawn dont le préfixe des objets instanciés, la distance maximale à laquelle ils peuvent être instanciés et un intervalle déterminant leur taille minimale et maximale.</p>

                <p>On peut également consulter le nombre d'objects ayant déjà été instanciés et réinitialiser ce nombre, supprimant tous les objets déjà instanciés dans la scène.</p>

                <p>C'est via cette fenêtre que j'ai instancié les 5000 astéroïdes se trouvant dans le jeu.</p>

                <h2>Implémentation du Job System</h2>
                <p>Une partie importante de cet exercice était de nous familiariser avec le Unity Job System. Le jeu comportant 5000 astéroïdes se déplaçant indépendamment les uns des autres, cela était essentiel pour conserver une performance acceptable.</p>

                <img
                    alt="Asteroids moving"
                    className="w-24 mb-5"
                    src="./img/projects/asteroids-rising.gif"
                />

                <p>Le mouvement des astéroïdes est donc effectué sur deux threads différents; l'un se charge des calculs de vélocité, accélération et rotation de chaque astéroïde, alors que l'autre se charge de mettre à jour la position des astéroïdes en leur appliquant des transformations.</p>

                <img
                    alt="Asteroids moving"
                    className="w-24 mb-5"
                    src="./img/projects/asteroid-jobs.jpg"
                />

                <p>Ainsi, les calculs et transformations se produisant simultanément sur deux threads différents, 5000 astéroïdes se déplacent à l'écran en même temps de façon non-uniforme et le jeu reste tout de même fluide.</p>

                <h2>Destruction des astéroïdes</h2>

                <p>Je n'ai pas implémenté le système de tir, mais j'ai implémenté le système de vie dont chaque astéroïde dispose.</p>

                <img
                    alt="Asteroids shooting"
                    className="w-24 mb-5"
                    src="./img/projects/asteroid-shooting.gif"
                />

                <p>De base, la barre de vie est cachée. Lorsqu'un astéroïde est atteint par un projectile, elle apparaît. Après deux projectiles, l'astéroïde est détruit dans une explosion, faisant baisser le nombre total d'astéroïde dans la scène tel qu'indiqué au haut de l'écran.</p>

                
            </div>

            <div className="project-section">
                <h1>Défis de conception</h1>
                <h2>Performance</h2>
                <p>Conserver une bonne framerate n'a pas été facile durant cet exercice. En plus de l'implémentation de multithreading, j'ai dû optimiser au maximum les modèles et textures des astéroïdes afin que ces derniers affectent le moins possible la performance.</p>
            
            </div>

            <div className="project-link-section">
                <a className="link-button" href="https://github.com/Ayduria/UQAC-8PRO135-unity" target="_blank" rel="noopener noreferrer">
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
                Patrick McRea-Desjardins</p>
            </div>
        </div>
    )
}

export default AsteroidField;