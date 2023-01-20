// src/components/Projects.js
import "./index.css"
import React from "react"
import { images } from '../Content'

function GamersGuess( {} ) {
    return (
        <div className="project-page">
            <div className="project-section">
                <h1>Project description</h1>

                <p>Developed in a team of two as part of a mobile computing course, Gamer's Guess is an Android mobile application that tests player's knowledge of video games through quizzes of varying difficulty.</p>
                <p>The video below demonstrates in detail how the application works.</p>

                <div className="iframe-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/tZZvvv6Bq_4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    <style jsx>{`
                        .iframe-container {
                            background-image: url(${ images.LoadingGif });
                        }
                    `}</style>
                </div>
                
            </div>

            <div className="project-section">
                <h1>My involvement</h1>
                <h2>Creation of the database</h2>
                <p>I created a database for the app containing all the questions and their answers categorized by difficulty as well as the leaderboard scores, the latter being dynamically added as new scores are entered.</p>

                <h2>Quix mechanics</h2>
                <p>I implemented the main quiz mechanic. The first involved fetching the right questions according to the chosen difficulty as well as their answer choices. Next, I programmed the system to display all of the difficulty's questions in a random order, with the next question appearing either when the player taps an answer or when the question's timer is up.</p>

                <img
                    alt="Gamers Guess quiz"
                    className="w-24 mb-5"
                    src="./img/projects/gg-answers.jpg"
                />

                <p>I also implemented an answer check to determine if the answer the player has chosen is right or wrong.</p>

                <h2>Score and leaderboard</h2>

                <p>I implemented a system that calculates the score as the player progresses through a quiz. Various factors come into play including the number of wrong answers, the number of consecutive correct answers and the time to answer each question.</p>

                <img
                    alt="Gamers Guess leaderboard"
                    className="w-24 mb-5"
                    src="./img/projects/gg-leaderboard.jpg"
                />

                <p>At the end of the quiz, I designed a score screen showing the player their final score as well as if it is a new highscore. The player then has the option to enter their name to add their score to the leaderboard, which dynamically adds it to the database.</p>

                <p>Finally, I implemented a leaderboard screen that the player can consult to see all the scores that have been added to it in descending order.</p>
                
            </div>

            <div className="project-section">
                <h1>Design challenges</h1>
                <h2>Different test environments</h2>
                <p>While I was testing on my real Android phone, my teammate was testing on an Android emulator. This has, on a few occasions, given us trouble with the emulator showing issues that my phone was not showing and vice versa. We did a lot of testing in both environments as well as on different emulators to make sure the app worked as it should.</p>
            
            </div>

            <div className="project-link-section">
                <a className="link-button" href="https://github.com/Ayduria/GamersGuess" target="_blank" rel="noopener noreferrer">
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
                <p>Eli Lapointe<br/>
                Patrick McRea-Desjardins</p>
            </div>
        </div>
    )
}

export default GamersGuess;