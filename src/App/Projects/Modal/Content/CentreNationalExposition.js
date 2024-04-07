// src/components/Projects.js
import "./index.css"
import React from "react"
import { GlobeAltIcon, DocumentTextIcon } from "@heroicons/react/24/outline"

function CentreNationalExposition( {} ) {
    return (
        <div className="project-page">
            <div className="project-section">
                <h1>Description du projet</h1>
                <p>Le projet de fin d'études en Techniques d'intégration multimédia au Cégep de Jonquière implique de réaliser, en équipe, un site web complet pour un organisme à but non lucratif. Nous devions également réaliser un panneau administratif complet, un guide d'utilisation de ce panneau ainsi que des vidéos promotionnelles pour l'organisme.</p>
                    
                <p>Notre équipe a eu la chance de réaliser un tout nouveau site web moderne pour le Centre national d'exposition, lequel ils utilisent toujours et continuent de mettre à jour.</p>
                <img
                    alt="Scrolling on CNE website"
                    className="w-24 mb-5"
                    src="./img/projects/cne-scroll.gif"
                />

                <h2>Préproduction</h2>
                <p>Durant la première session, nous étions entièrement consacrés à la préproduction. Durant cette phase, nous avons eu de nombreuses rencontres avec le client et réalisé divers éléments, soit:</p>
                <ul>
                    <li>Établissement d'une compagnie fictive pour notre équipe (Quattro Media)</li>
                    <li>Structure du site et de sa base de données</li>
                    <li>Design des interfaces de toutes les pages</li>
                    <li>Écriture des scripts et tournages des clips pour les vidéos promotionnelles</li>
                    <li>Échéancier de production pour la session suivante</li>
                </ul>

                <h2>Production</h2>
                <p>La phase de production a débuté à la session suivante, durant laquelle nous avons entamé et complété le site web et son panneau administratif ainsi que les trois vidéos promotionnelles. Une fois le tout terminé, le nouveau site a officiellement été mis en ligne et le client a reçu tout les documents nécessaires pour continuer à l'entretenir.</p>
            </div>

            <div className="project-link-section">
                    <a className="link-button" href="https://www.centrenationalexposition.com/" target="_blank" rel="noopener noreferrer">
                        <GlobeAltIcon className="w-7 inline-block mb-1 mr-2"/>
                        Visiter le site web
                    </a>
            </div>

            <div className="project-section">
                <h1>Mon implication</h1>
                <p>J'ai occupé de nombreux rôles durant la réalisation de ce projet. Notre équipe comptait au départ quatre membres, ce qui a descendu à trois lorsque notre chargé de projet et designer a malheureusement dû quitter. J'ai alors assumé ces rôles en plus de mon rôle d'intégratrice.</p>
                <h2>Gestion d'équipe et communication client</h2>
                <p>En tant que chargée de projet, j'avais de nombreuses responsabilités par rapport à la gestion de mon équipe, mais surtout par rapport aux communications avec notre client. Toute communication à distance entre notre client et notre équipe passait par moi, et j'étais en charge de planifier et de diriger les réunions.</p>
                <h2>Design d'interfaces</h2>
                <p>Après le départ de notre designer, j'ai continué le travail qu'il avait entamé et conçu de nombreux designs d'interfaces pour les différentes pages du site.</p>
                <h2>Intégration et interaction utilisateur</h2>
                <p>L'un de mes plus grands rôle dans ce projet fut celui d'intégratrice: j'ai pris les designs réalisés durant la préproduction et je leur ai donné vie. La structure et le visuel du front-end du site web ont presque entièrement été programmés par moi en utilisant du HTML, CSS et jQuery.</p>
                <img
                    alt="Scrolling on CNE website"
                    className="w-24 mb-5"
                    src="./img/projects/cne-expositions.gif"
                />
                <p>J'ai également programmé une grande partie de l'interactivité et du dynamisme grâce au PHP. Notamment, plusieurs éléments, dont les expositions, les activités et les pages elle-mêmes sont stockés dans une base de données MySQL et affichés dynamiquement. Le site web comporte également deux formulaires que les utilisateurs peuvent remplir pour communiquer avec le CNE.</p>
                <h2>Rédaction de rapports et guides</h2>
                <p>J'ai contribué à la rédaction de bon nombres de documents pour le projet dont le rapport de préproduction et les rapports que nous devions rédiger après chaque rencontre client. Le plus gros document que j'ai rédigé est certainement le procédurier, qui indique au client en détails très précis comment utiliser le panneau d'administration de son site web.</p>

                <h2>Tournage vidéo</h2>
                <p>Au cours du projet, je me suis fréquemment rendue au CNE avec mon équipe pour des séances de tournage. J'ai filmé une partie des clips se retrouvant dans les vidéos promotionnelles sur la page d'accueil du site.</p>
            </div>

            <div className="project-section project-credits">
            <h1>Crédits</h1>
                <h2>Chargée de projet, designer et intégratrice</h2>
                <p>Eli Lapointe</p>

                <h2>Programmeur</h2>
                <p>Jean-Christophe Tremblay</p>

                <h2>Vidéaste</h2>
                <p>Samuel Doucet</p>

                <h2>Designer</h2>
                <p>Stéphane Hoarau</p>
            </div>

        </div>
    )
}

export default CentreNationalExposition;