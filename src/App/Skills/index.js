// src/components/Skills.js
import "./index.css"
import { progskills, toolskills } from "./data"
import React from "react"
import { CheckBadgeIcon, CpuChipIcon } from "@heroicons/react/24/solid"

function Skills() {
    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-14">
                    <CpuChipIcon className="w-10 inline-block mb-4"/>
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Mes compétences
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
                        ipsa delectus eum quo voluptas aspernatur accusantium distinctio
                        possimus est.
                    </p>
                </div>
                <h2 className="skill-header">Programmation</h2>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {progskills.map((progskills) => (
                        <div key={progskills} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"/>
                                <span className="title-font font-medium text-white">
                                    {progskills}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <h2 className="skill-header">Outils</h2>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {toolskills.map((toolskills) => (
                        <div key={toolskills} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"/>
                                <span className="title-font font-medium text-white">
                                    {toolskills}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;