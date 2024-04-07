// src/components/Projects.js
import "./index.css"
import React, { useState, useContext } from "react"
import { LanguageContext } from "../../../../Language/languageContext"
import { images } from '../Content'

function AfterSchool( {} ) {
    const { languageData } = useContext(LanguageContext);

    if (!languageData.projects) return null;

    const project = languageData.projects.projects[1];

    return (
        <div className="project-page">
        <div className="project-section">
                <blockquote className="w-3/4 lg:w-1/2">
                    <p>{project.quote}</p>
                </blockquote>
            </div>

        <div className="project-section">
            <h1>{languageData.projects.section1}</h1>
            
            <p>{project.paragraph1}</p>

            <p>{project.paragraph2}</p>

            <ul dangerouslySetInnerHTML= { { __html: project.list } }></ul>

            <div className="iframe-container">
            <iframe width="800" height="450" src="https://www.youtube.com/embed/yiSYxplhak0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <style jsx>{`
                    .iframe-container {
                        background-image: url(${ images.LoadingGif });
                    }
                `}</style>
            </div>            
        </div>

        <div className="project-link-section">
            <a className="link-button" href="https://zaksley.itch.io/after-school" target="_blank" rel="noopener noreferrer">
                <img
                    alt="itch.io logo"
                    className="inline-block w-6 mr-2 mb-1"
                    src="./img/icons/itch-io.png"
                />
                Voir le jeu
            </a>
        </div>

        <div className="project-section">
            <h1>Mon implication</h1>

            <h2>Ennemis</h2>

            <p>J'étais le programmeur d'IA de l'équipe, et les vagues d'ennemis qui s'affichaient à l'écran en permanence occupaient donc la majeure partie de mon temps de travail sur ce projet. Il était crucial que le comportement des ennemis soit amusant et soigné, car le combat contre eux est au cœur du gameplay d'After School.</p>

            <img
                alt="Crowds of enemies"
                className="w-24 mb-5"
                src="./img/projects/afterschool-enemies.gif"
            />

            <h3>Gestion des foules</h3>

            <p>L'un de mes principaux défis consistait à faire en sorte que les ennemis se déplacent naturellement en groupe cohérent. Au début, après avoir programmé leur poursuite et leur attaque de base, ils couraient tous en file indienne, ce qui rendait le jeu assez ennuyeux.</p>

            <p>La première chose que j'ai faite a été d'utiliser les ressources disponibles et d'utiliser le crowd following AI d'Unreal. De cette façon, ils ont cessé de se heurter les uns aux autres en permanence et ont commencé à se disperser d'une manière beaucoup plus naturelle lorsqu'ils poursuivaient le joueur. C'était un bon début, mais j'avais l'impression qu'il manquait encore quelque chose. Une fois que les ennemis commençaient à attaquer le joueur, ils restaient au même endroit, et j'ai donc commencé à me pencher sur le problème.</p>

            <img
                alt="Enemy strafe debug lines"
                className="w-24 mb-5"
                src="./img/projects/afterschool-strafe.gif"
            />

            <h3>Pas de côté</h3>

            <p>Cela nous amène à la deuxième chose que j'ai implémentée pour rendre le comportement des ennemis plus naturel : les pas de côté. Lorsque les ennemis attaquent le joueur, je voulais qu'ils se déplacent de gauche à droite, ajoutant ainsi beaucoup plus de dynamisme à leur attaque et leur permettant d'esquiver certains tirs.</p>

            <p>Comme solution, j'ai fait en sorte qu'ils obtiennent fréquemment une nouvelle position autour du joueur en calculant l'hypothénuse d'un triangle droit en utilisant leur portée d'attaque et leur vecteur avant face au joueur. J'ai ensuite fait en sorte qu'ils fassent toujours face au joueur pendant cette action.</p>

            <h2>Contours</h2>

            <p>Une autre chose importante sur laquelle j'ai travaillé durant ce projet est de mettre des contours colorés autout de certains acteurs importants en utilisant <b><a className="text-white" href="https://www.unrealengine.com/marketplace/en-US/product/outliner-and-symbol-system" target="_blank">Hyper Outliner and Symbol System</a></b> comme shader de contours pour gagner du temps d'implémentation. C'était une fonctionnalité demandée par certains testeurs qui avaient du mal à voir les éléments importants à l'écran.</p>

            <img
                alt="Outline around pinata"
                className="w-24 mb-5"
                src="./img/projects/afterschool-outlines.jpg"
            />

            <p>De nombreux éléments ont un contour pour attirer l'attention. Par exemple, les fontaines ont un contour bleu, les œufs d'araignée ont un contour rouge et, comme illustré ci-dessus, les piñatas ont un contour doré. Les butins tombant des ennemis ont également un contour doré, ce qui incite les joueurs à les ramasser.</p>

            <p>De la manière dont je les ai implémentés, les contours apparaissent et disparaissent en fonction de la distance du joueur afin de ne pas encombrer l'écran. Certains éléments, comme les citrouilles, ont une distance d'apparition beaucoup plus grande pour que le joueur puisse les voir facilement de loin pendant la vague cauchemar.</p>

            <h2>PNJs réactifs</h2>

            <p>Alors que le projet touchait à sa fin, l'une des dernières choses importantes sur lesquelles j'ai travaillé était les PNJs qui se tiennent à l'extérieur de l'aire de jeu. Le monde semblait vide, et des PNJs qui réagissent au succès des joueurs étaient exactement ce dont le jeu avait besoin.</p>

            <img
                alt="NPCs cheering from the sidelines"
                className="w-24 mb-5"
                src="./img/projects/afterschool-crowd.gif"
            />

            <p>Par défaut, les PNJs sont simplement inactifs, faisant de temps en temps quelques gestes tels que regarder autour d'eux ou s'étirer les bras. Lorsqu'une vague est terminée, ils applaudissent avec enthousiasme, ce qui motive le joueur. Lors d'une vague cauchemar, ils commencent à se recroqueviller, terrifiés, augmentant ainsi la peur du joueur et rendant le monde plus vivant.</p>

            <h3>Optimisation</h3>

            <p>Le jeu étant déjà très chargé avec l'apparition de tous les objets et ennemis, les PNJs ne devaient pas avoir d'impact majeur sur les performances. J'ai passé beaucoup de temps à les optimiser, ainsi que leurs animations, pour en faire des objets animés et non des personnages à part entière. Après tout, le joueur n'aurait jamais d'interaction avec eux, et ils n'avaient donc pas besoin de choses telles que des collisions ou des interactions physiques.</p>
            
        </div>

        <div className="project-section project-credits">
            <h1>Crédits</h1>
            <h2>Équipe</h2>
            <p>Enzo Médina<br/>
                Ann-Laurie Lapointe<br/>
                Clémence Clavel<br/>
                Jean-Félix Girard<br/>
                Lori Lou<br/>
                Hugo Mora<br/>
                Laurianna Ferra<br/>
                Patrick McRea-Desjardins<br/>
                </p>
            <h2>Assets</h2>
            <p>Modèles - POLYGON<br/>
                Outlines - Games By Hyper<br/>
                </p>
            
        </div>
    </div>
    )
}

export default AfterSchool;