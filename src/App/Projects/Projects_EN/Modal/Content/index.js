// src/components/Projects.js
import AfterSchool from "./AfterSchool"
import Lux from "./Lux"
import Alka from "./Alka"
import CentreNationalExposition from "./CentreNationalExposition"
import TimeSwap from "./TimeSwap"
import FeatureHunter from "./FeatureHunter"
import AsteroidField from "./AsteroidField"
import GamersGuess from "./GamersGuess"
import LocationFilm from "./LocationFilm"
import DroidRush from "./DroidRush"
import LoadingGif from '../../../../../Assets/img/loading-gif.gif'

const projects = {
    'After School' : AfterSchool,
    'Droid Rush' : DroidRush,
    'Lux': Lux,
    'ALKA': Alka,
    'Centre national d\'exposition' : CentreNationalExposition,
    'Feature Hunter' : FeatureHunter,
    'Time Swap' : TimeSwap,
    'Asteroid Field' : AsteroidField,
    'Gamer\'s Guess' : GamersGuess,
    'Movie Renting' : LocationFilm,
}

const images = {
    'LoadingGif': LoadingGif,
}

export { projects, images }