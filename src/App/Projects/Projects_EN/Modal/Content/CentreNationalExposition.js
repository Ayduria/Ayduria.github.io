// src/components/Projects.js
import "./index.css"
import React from "react"
import { GlobeAltIcon, DocumentTextIcon } from "@heroicons/react/24/outline"

function CentreNationalExposition( {} ) {
    return (
        <div className="project-page">
            <div className="project-section">
                <h1>Project description</h1>
                <p>The end-of-study project in Multimedia Integration Techniques at Cégep de Jonquière involves creating, as a team, a complete website for a non-profit organization. We also had to produce a complete administrative panel, a user guide for this panel as well as promotional videos for the organization.</p>
                    
                <p>Our team had the opportunity to develop a brand new modern website for the Centre National d'Exposition which they still use and continue to update.</p>
                <img
                    alt="Scrolling on CNE website"
                    className="w-24 mb-5"
                    src="./img/projects/cne-scroll.gif"
                />

                <p>The project was spread over two semesters and had two phases.</p>

                <h2>Pre-production</h2>
                <p>During the first semester, we were entirely devoted to pre-production. During this phase, we had numerous meetings with the client and carried out various tasks, namely:</p>
                <ul>
                    <li>Establishment of a fictitious company for our team (Quattro Media)</li>
                    <li>Structure of the website and its database</li>
                    <li>Design of the interfaces of all pages</li>
                    <li>Writing scripts and filming clips for the promotional videos</li>
                    <li>Production schedule the the next semester</li>
                </ul>

                <div className="project-link-section">
                    <a className="file-button" href="./files/rapport-preproduction.pdf" target="_blank" rel="noopener noreferrer">
                        <DocumentTextIcon className="w-7 inline-block mb-1 mr-2"/>
                        Pre-production report
                    </a>
                </div>

                <h2>Production</h2>
                <p>The production phase began in the next semester, during which we started and completed the website and its administrative panel as well as the three promotional videos. Once all finished, the new website was officially put online and the client received all the necessary documents to continue maintaining and updating it.</p>

                <img
                        alt="Team picture"
                        className="w-24 mb-5"
                        src="./img/projects/cne_presentation1.jpg"
                    />
            </div>

            <div className="project-link-section">
                    <a className="link-button" href="https://www.centrenationalexposition.com/" target="_blank" rel="noopener noreferrer">
                        <GlobeAltIcon className="w-7 inline-block mb-1 mr-2"/>
                        Visit the website
                    </a>
                </div>

            <div className="project-section">
                <h1>My involvement</h1>
                <p>I held many roles over the course of this project. Our team started out with four members, which went down to three when our project manager and designer unfortunately had to leave. I then took on these roles in addition to my role of integrator.</p>
                <h2>Team management and client communication</h2>
                <p>As project manager, I had many responsibilities regarding the management of my team, but especially regarding communications with our client. All remote communication between our client and our team went through me, and I was in charge of planning and leading the meetings.</p>
                <h2>Interface design</h2>
                <p>After the departure of our designer, I continued the work he had started and designed many interface designs for the different pages of the website.</p>
                <h2>Integration and user interaction</h2>
                <p>One of my biggest roles in this project was as an integrator: I took the designs made during pre-production and brought them to life. The structure and visuals of the front-end part of the website were almost entirely programmed by me using HTML, CSS and jQuery.</p>
                <img
                    alt="Scrolling on CNE website"
                    className="w-24 mb-5"
                    src="./img/projects/cne-expositions.gif"
                />
                <p>I also programmed a lot of the interactivity and dynamism using PHP. In particular, several elements, including exhibitions, activities and the pages themselves are stores in a MySQL database and displayed dynamically. The website also has two forms that user can complete to communicate with the CNE.</p>
                <h2>Redaction of reports and guides</h2>
                <p>I contributed to the writing of many documents for the project including the pre-production report and the reports that we had to write after each client meeting. The biggest document I wrote is certainly the admin manual, which tells the client in very precise detail how to use the administration panel of their website.</p>
                
                <div className="project-link-section">
                    <a className="file-button" href="./files/procedurier.pdf" target="_blank">
                        <DocumentTextIcon className="w-7 inline-block mb-1 mr-2"/>
                        Admin manual
                    </a>
                </div>

                <h2>Video shooting</h2>
                <p>During the project, I frequently went to the CNE with my team for filming sessions. I filmed some of the clips found in the promotional videos on the homepage of the website.</p>
            </div>

            <div className="project-section">
                <h1>Design challenges</h1>

                <h2>Huge amount of content</h2>
                <p>One of the biggest challenges we encountered, and which stayed with us for most of the project, was organizing the content on the website. There is a lot of content and finding the optimal organization prove to be a headache that took many meetings with the client to solve.</p>

                <div className="project-link-section">
                    <a className="file-button" href="./files/organigramme-cne.pdf" target="_blank">
                        <DocumentTextIcon className="w-7 inline-block mb-1 mr-2"/>
                        Organizational chart
                    </a>
                </div>

                <h2>Reduced team</h2>
                <p>Having lost a member of our team, we had to adapt quickly. We were the smallest team in the class but had the same workload, so we had to work twice as hard.</p>
            </div>

            <div className="project-section project-credits">
            <h1>Credits</h1>
                <h2>Project manager, designer and integrator</h2>
                <p>Eli Lapointe</p>

                <h2>Programmer</h2>
                <p>Jean-Christophe Tremblay</p>

                <h2>Videographer</h2>
                <p>Samuel Doucet</p>

                <h2>Designer</h2>
                <p>Stéphane Hoarau</p>
            </div>

        </div>
    )
}

export default CentreNationalExposition;