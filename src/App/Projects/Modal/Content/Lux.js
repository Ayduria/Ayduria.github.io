// src/components/Projects.js
import "./index.css"
import React from "react"

function Lux( {} ) {
    return (
    <div className="project-page">
        <div className="project-section">
                <blockquote className="w-3/4 lg:w-1/2">
                    <p>Tu es notre espoir de retrouver une vie normale, notre lumière.</p>
                </blockquote>
            </div>

        <div className="project-section">
            <h1>Description du projet</h1>
            <p>Lux est un jeu platformer 3D à la troisième personne dans lequel le joueur incarne un chat humanoïde ayant pour mission de sauver les animaux sauvages de la ville des éclairages néfastes. Il s'agit d'un jeu sérieux ayant pour objectif de sensibiliser les joueurs au phénomène de la pollution lumineuse.</p>

            <h2>Préproduction</h2>
            <p>Durant la première session de travail sur le projet, nous avons eu une phase de préproduction durant laquelle nous avons réalisé divers éléments dont:</p>
            <ul>
                <li>Recherche sur la problématique de la pollution lumineuse</li>
                <li>Réalisation de trois One Pagers</li>
                <li>Deux prototypes réalisés en deux semaines chaque</li>
                <li>Post-mortem et plan de production</li>
            </ul>

            <h2>Production</h2>
            <p>La phase de production, durant laquelle nous avons réalisé le jeu complet, s'est déroulée durant la deuxième session de travail sur le projet. Le cheminement s'est fait par sprints de deux semaines parsemés de rencontres scrum et de sprints review dans lesquels était évalué le progrès sur nos histoires utilisateurs.</p>
            
        </div>

        <div className="project-section">
            <h1>Mon implication</h1>
            <h2>Système de dialogue</h2>
            <p>Au cours du jeu, Lux discute avec divers animaux, qui lui expliquent leur situation et lui donnent des objectifs via un système de dialogue.</p>
            <img
                    alt="Dialogue with Candela"
                    className="w-24 mb-5"
                    src="./img/projects/lux-dialogue.gif"
            />

            <p>J'ai réalisé ce système de dialogue au complet. Ce dernier est entièrement dynamique, changeant selon le personnage à qui l'on s'adresse et affichant ses lignes de dialogue correspondantes via une table de données.</p>

            <img
                    alt="Dialogue data table"
                    className="w-24 mb-5"
                    src="./img/projects/dialogue-table.jpg"
            />

            <p>Cette table de donnés contient toutes les lignes de dialogues ainsi que la partie de dialogue à laquelle elles appartiennent. Il est également possible d'assigner un événement à chaque ligne de dialogue, lequel est appelé lorsque cette ligne apparaît; par exemple, dans le dialogue plus haut, la seconde ligne révèle le nom de Candela dans la boîte de dialogue.</p>

            <h2>Drones</h2>
            <p>Dans les zones où Lux doit faire du platforming, des drones patrouillent les rues afin de décourager quiconque de passer par là. Je suis en charge de l'AI de ces drones.</p>

            <img
                    alt="Drones behavior tree"
                    className="w-24 mb-5"
                    src="./img/projects/sentinel-tree.jpg"
            />

            <p>Par défaut, les drones patrouillent de point en point selon ceux qui lui ont été assignés. J'ai commencé par implémenter ce comportement de base, qui peut s'effectuer de deux façons différentes au choix: parcourir les points en boucle, ou en aller-retour.</p>

            <img
                    alt="Drones patrolling"
                    className="w-24 mb-5"
                    src="./img/projects/lux-sentinel-patrol.gif"
            />

            <p>Je me suis ensuite attaquée à leur perception et comportement de pourchasse. Si les drones détectent Lux, ils se mettent en mode alerte, puis rapidement en mode de pourchasse si le joueur ne se cache pas assez vite. Si le joueur réussit à s'échapper, le drone va demeurer en mode alerte et chercher Lux autour de lui un moment avant de résumer sa patrouille.</p>

            <img
                    alt="Drones chasing"
                    className="w-24 mb-5"
                    src="./img/projects/lux-sentinel-alert.gif"
            />

            <p>Si le drone est suffisamment près de Lux et l'a dans son champ de vision, il va commencer à charger son attaque, figeant Lux en place brièvement. Une fois l'attaque chargée, le drone attaque d'un bref rayon de lumière puissant, ramenant Lux à son dernier checkpoint (le système de checkpoint a été programmé par un autre membre de l'équipe). Le drone poursuit ensuite sa patrouille.</p>

            <img
                    alt="Drones chasing"
                    className="w-24 mb-5"
                    src="./img/projects/lux-sentinel-attack.gif"
            />

            <p>En plus d'une perception visuelle, j'ai aussi implémenté sur les drones une perception auditive. Si Lux approche un drone par l'arrière de trop près, ce dernier va l'entendre et immédiatement se retourner en alerte.</p>
            
        </div>

        <div className="project-section">

            <h1>Défis de conception</h1>
            <h2>Apprentissage rapide</h2>
            <p>Avant de commencer ce projet, je n'avais jamais fait de projet C++ dans Unreal ni utilisé Perforce. J'ai donc dû apprendre à mesure que je travaillais. Les autres programmeurs étaient d'ailleurs majoritairement dans la même situation, et nous avons rencontré beaucoup de problèmes dans les débuts du projet. Nous sommes à présent beaucoup plus à l'aise et efficaces.</p>

            <h2>Grande équipe multidisciplinaire</h2>
            <p>Ce projet est ma première expérience d'un travail non seulement dans une si grande équipe, mais aussi une équipe multidiscplinaire. En effet, elle est constituée de programmeurs du DIM à Chicoutimi et d'artistes du NAD à Montréal. Une bonne communication est essentielle pour coordonner notre travail et bien se comprendre.</p>
        </div>

        <div className="project-section project-credits">
            <h1>Crédits</h1>
            <h2>Artistes du NAD</h2>
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
            <h2>Programmeurs du DIM</h2>
            <p>Thomas Bergeron<br/>
                Patrick McRea-Desjardins<br/>
                Ann-Laurie Lapointe<br/>
                Félix Brassard<br/>
            </p>
            <h2>Musiciens de l'UdeM</h2>
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