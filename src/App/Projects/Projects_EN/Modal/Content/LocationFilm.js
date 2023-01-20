// src/components/Projects.js
import "./index.css"
import React from "react"
import { DocumentTextIcon } from "@heroicons/react/24/outline"

function LocationFilm( {} ) {
    return (
        <div className="project-page">
            <div className="project-section">
                <h1>Project description</h1>
                <p>This project was my semester's final project in an Advanced Database course. It consisted of creating a fictitious Java application using an Oracle database to present an interactive movie rental interface to a user.</p>

                <p>The project spanned the majority of the semester and was separated into different parts, the main ones being schematization, database building and application development.</p>
                
            </div>

            <div className="project-section">
                <h1>My involvement</h1>
                <p>The project not being a team project, I worked on it entirely by myself.</p>

                <h2>Schematization</h2>
                <p>The first stage of the project consisted of creating conceptual and relational diagrams for the database of the application according to the information to be found there in relation to the users, the films and the copies of those films to be rented.</p>

                <img
                    alt="Schema conceptuel"
                    className="w-24 mb-5"
                    src="./img/projects/database-schema.jpg"
                />

                <p>For the conceptual schema, I separated all the information into separate tables with their fields and generic types. I also defined the relationships betwen these tables.</p>

                <img
                    alt="Schema relationnel"
                    className="w-24 mb-5"
                    src="./img/projects/database-schema2.jpg"
                />

                <p>As for the relational schema, I thought of it based on how my database would be built in Oracle. During this step, I also defined the field constraints that I would need to implement. I was then fully prepared to build my database.</p>

                <div className="project-link-section">
                    <a className="file-button" href="./files/RapportFilm1.pdf" target="_blank">
                        <DocumentTextIcon className="w-7 inline-block mb-1 mr-2"/>
                        Schematization report
                    </a>
                </div>

                <h2>Building the database</h2>

                <p>After making my diagrams, I tackled the construction of my Oracle database. Relying on my relational schema, I wrote all the SQL code necessary to build my tables, taking care to specify the constraints for certain fields if necessary.</p>

                <img
                    alt="Database procedures code"
                    className="w-24 mb-5"
                    src="./img/projects/cretab-procedures.jpg"
                />

                <p>In addition to creating the tables, I defined all the procedures that I was going to need in my application, for example to add employees or films. Via very simple procedure calls, these perform all the operations necessary to insert, modify or delete all the information in the necessary tables.</p>

                <img
                    alt="Database"
                    className="w-24 mb-5"
                    src="./img/projects/film-database.jpg"
                />


                <p>Finally, I added some data in my database in order to be able to do my tests.</p>

                <h2>App development</h2>

                <p>Once my database was built and populated, I started designing and programming my application on NetBeans. Thanks to the Hibernate framework, I adapted the structure of my database to a Java class structure, each table being associated with its own class.</p>

                <p>I then built very simple interfaces with fields with which a user must interact to use the application.</p>

                <p>I started by setting up the login screen, where the user must enter their email address and password. These identifiers are then searched in the database, in which the passwords are encrypted. If the user exists and has entered the correct password, they access the movie rental interface.</p>

                <img
                    alt="Main app interface"
                    className="w-24 mb-5"
                    src="./img/projects/film-recherche.jpg"
                />

                <p>On this screen, I implemented many search fields in which the user can enter terms to search for movies in the database. They can enter any combination of information, which may include only part of a movie title, and the list to the right will then display all movies matching all search criteria.</p>

                <p>When the user clicks on a film, I bring up another interface at the bottom of the screen which presents all information pertaining to the film. The user can then click on the name of one of the actors or directors to display information relating to this person.</p>

                <p>Finally, I implemented the renting of movies. After clicking on a movie, the user can press the Rent movie button and, if its maximum number of rentals is not exceeded and the movie still has copies available, a copy of the movie in question will be rented to the user.</p>

                <div className="project-link-section">
                    <a className="file-button" href="./files/RapportFilm2.pdf" target="_blank">
                        <DocumentTextIcon className="w-7 inline-block mb-1 mr-2"/>
                        Development report
                    </a>
                </div>

            </div>

            <div className="project-section">
                <h1>Design challenges</h1>
                <h2>Unfamiliar tools and languages</h2>
                <p>Everything I had to use in this project, namely Java, NetBeans and Oracle, were not very familiar to me, having never really had the opportunity to use them in other projects. I had a period of adaptation where I learned to use them, which slowed me down at the beginning.</p>
            
            </div>

            <div className="project-link-section">
                <a className="link-button" href="https://github.com/Ayduria/LocationFilm" target="_blank" rel="noopener noreferrer">
                    <img
                        alt="itch.io logo"
                        className="inline-block w-6 mr-2 mb-1"
                        src="./img/icons/github.svg"
                    />
                    View the repository
                </a>
            </div>

            <div className="project-section project-credits">
            <h1>Credits</h1>
                <p>Eli Lapointe<br/></p>
            </div>
        </div>
    )
}

export default LocationFilm;