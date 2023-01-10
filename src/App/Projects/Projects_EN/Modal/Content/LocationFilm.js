// src/components/Projects.js
import "./index.css"
import React from "react"
import { DocumentTextIcon } from "@heroicons/react/24/outline"

function LocationFilm( {} ) {
    return (
        <div className="project-page">
            <div className="project-section">
                <h1>Description du projet</h1>
                <p>Ce projet était mon projet de session dans un cours de Base de données avancées. Il consistait en la création d'une application Java fictive utilisant une base de données Oracle pour présenter à un utilisateur une interface interactive de location de films.</p>

                <p>Le projet s'est étendu sur la majorité de la session et était séparé en différentes parties, les principales étant la schématisation, la construction de la base de données et la conception de l'application.</p>
                
            </div>

            <div className="project-section">
                <h1>Mon implication</h1>
                <p>Le projet n'étant pas en équipe, je l'ai réalisé au complet par moi-même.</p>

                <h2>Schématisation</h2>
                <p>La première étape du projet consistait à réaliser des schémas conceptuels et relationnels pour la base de données de l'application selon les informations devant s'y retrouver par rapport aux utilisateurs, aux films et aux copies à louer de ces films.</p>

                <img
                    alt="Schema conceptuel"
                    className="w-24 mb-5"
                    src="./img/projects/database-schema.jpg"
                />

                <p>Pour le schéma conceptuel, j'ai séparé toutes les informations en tables distinctes avec leurs champs et leurs types génériques. J'ai aussi défini les relations entre ces tables.</p>

                <img
                    alt="Schema relationnel"
                    className="w-24 mb-5"
                    src="./img/projects/database-schema2.jpg"
                />

                <p>Quant au schéma relationnel, je l'ai pensé en fonction de comment ma base de données serait construite dans Oracle. Durant cette étape, j'ai également défini les contraintes de champs que j'aurais besoin d'implémenter. J'étais alors complètement préparée à construire ma base de données.</p>

                <div className="project-link-section">
                    <a className="file-button" href="./files/RapportFilm1.pdf" target="_blank">
                        <DocumentTextIcon className="w-7 inline-block mb-1 mr-2"/>
                        Rapport de schématisation
                    </a>
                </div>

                <h2>Construction de la base de données</h2>

                <p>Après avoir réalisé mes schémas, je me suis attaquée à la construction de ma base de données Oracle. Me fiant à mon schéma relationnel, j'ai rédigé tout le code SQL nécessaire pour construire mes tables, prenant soin de préciser les contraintes spécifiques pour certains champs si nécessaire.</p>

                <img
                    alt="Database procedures code"
                    className="w-24 mb-5"
                    src="./img/projects/cretab-procedures.jpg"
                />

                <p>En plus de créer les tables, j'ai défini toutes les procédures dont j'allais avoir besoin dans mon application, par exemple pour ajouter des employés ou des films. Via des appels de procédure bien simples, celles-ci font toutes les opérations nécessaires pour insérer, modifier ou supprimer toutes les informations dans les tables nécessaires.</p>

                <img
                    alt="Database"
                    className="w-24 mb-5"
                    src="./img/projects/film-database.jpg"
                />


                <p>Finalement, j'ai ajouté quelques données dans ma base de données afin de pouvoir faire mes tests.</p>

                <h2>Conception de l'application</h2>

                <p>Une fois ma base de données construite et remplie, j'ai commencé la conception et la programmation de mon application sur NetBeans. Grâce au framework Hibernate, j'ai adapté la structure de ma base de données à une structure de classe Java, chaque table étant associée à sa propre classe.</p>

                <p>J'ai ensuite construit des interfaces bien simples dotées de champs avec lequel un utilisateur doit interagir pour utiliser l'application.</p>

                <p>J'ai commencé par mettre en place l'écran de connexion, dans lequel l'utilisateur doit entrer son adresse courriel et son mot de passe. Ces identifiants sont ensuite recherchés dans la base de données, dans laquelle les mots de passe sont encryptés. Si l'utilisateur existe et a entré le bon mot de passe, il accède à l'interface de location de films.</p>

                <img
                    alt="Main app interface"
                    className="w-24 mb-5"
                    src="./img/projects/film-recherche.jpg"
                />

                <p>Sur cet écran, j'ai implémenté de nombreux champs de recherche dans lequel l'utilisateur peut entrer des termes pour chercher des films dans la base de données. Il peut entrer n'importe quelle combination d'informations, ce qui peut inclure seulement une partie d'un titre de film, et la liste à droite va alors afficher tous les films correspondant à tous les critères de recherche.</p>

                <p>Lorsque l'utilisateur clique sur un film, je fais apparaître une autre interface au bas de l'écran qui présente toutes les informations reliées au film. L'utilisateur peut alors cliquer sur le nom d'un des acteurs ou réalisateurs pour afficher des informations par rapport à cette personne.</p>

                <p>Finalement, j'ai implémenté la location de film. Après avoir cliqué sur un film, l'utilisateur peut appuyer sur le bouton Louer le film et, si son nombre de locations maximales n'est pas excédé et que le film a encore des copies de disponibles, une copie du film en question va lui être louée.</p>

                <div className="project-link-section">
                    <a className="file-button" href="./files/RapportFilm2.pdf" target="_blank">
                        <DocumentTextIcon className="w-7 inline-block mb-1 mr-2"/>
                        Rapport de conception
                    </a>
                </div>

            </div>

            <div className="project-section">
                <h1>Défis de conception</h1>
                <h2>Outils et langages non familiers</h2>
                <p>Tout ce que j'ai eu à utiliser dans ce projet, soit Java, Netbeans et Oracle, ne m'étaient pas très familiers, n'ayant jamais vraiment eu l'occasion de les utiliser dans d'autres projets. J'ai donc eu une période d'adaptation où j'ai appris à les utiliser, ce qui a ralenti mes débuts.</p>
            
            </div>

            <div className="project-link-section">
                <a className="link-button" href="https://github.com/Ayduria/LocationFilm" target="_blank" rel="noopener noreferrer">
                    <img
                        alt="itch.io logo"
                        className="inline-block w-6 mr-2 mb-1"
                        src="./img/icons/github.svg"
                    />
                    Voir le répertoire
                </a>
            </div>
        </div>
    )
}

export default LocationFilm;