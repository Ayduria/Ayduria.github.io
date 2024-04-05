import "./index.css"
import React, { useContext } from "react"
import { LanguageContext } from "../../Language/languageContext"
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline"

function About() {
    const { languageData } = useContext(LanguageContext);

    return (
        <section id="about">
            <div className="flex flex-col w-full pt-12">
                <QuestionMarkCircleIcon className="mx-auto inline-block w-10 mb-4"/>
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-10 lg:mb-0">
                    { languageData["about/title"] }
                </h1>
            </div>
            <div className="container mx-auto flex px-10 md:flex-row flex-col items-center pb-10">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <p className="mb-6 leading-relaxed">{ languageData["about/paragraph1"] }</p>
                    <p className="mb-6">{ languageData["about/paragraph2"] }</p>
                    <p className="mb-10">{ languageData["about/paragraph3"] }</p>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 p-10">
                    <img
                        className="object-cover object-center rounded-full"
                        alt="Me smiling"
                        src="./img/me4.jpg"
                    />
                </div>
            </div>
        </section>
    );
}

export default About;