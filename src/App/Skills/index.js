import "./index.css"
import React, { useContext } from "react"
import { LanguageContext } from "../../Language/languageContext"
import { progskills, toolskills } from "./data"
import { CpuChipIcon } from "@heroicons/react/24/solid"

function Skills() {
    const { languageData } = useContext(LanguageContext);

    if (!languageData.skills) return null;

    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-14">
                    <CpuChipIcon className="w-10 inline-block mb-4"/>
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        { languageData.skills.title }
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        { languageData.skills.tagline }
                    </p>
                </div>
                <h2 className="skill-header">{ languageData.skills.category1 }</h2>
                <div className="bg-gray-800 rounded flex flex-wrap lg:w-4/5 sm:mx-auto mb-10 -mx-2 justify-center">
                    {progskills.map((progskills) => (
                        <div key={progskills} className="p-2 w-1/2 sm:w-1/3 md:w-1/5 lg:w-1/6 w-full">
                            <div className="flex flex-wrap p-4 h-full items-center justify-center">
                                <img
                                    alt="Skill icon"
                                    className="w-24 mb-5"
                                    src={progskills.image}
                                />
                                <span className="title-font font-medium text-white w-full font-bold">
                                    {progskills.title}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <h2 className="skill-header">{ languageData.skills.category2 }</h2>
                <div className="bg-gray-800 rounded flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 justify-center">
                    {toolskills.map((toolskills) => (
                         <div key={toolskills} className="p-2 w-1/2 sm:w-1/3 md:w-1/5 lg:w-1/6 w-full">
                         <div className="flex flex-wrap p-4 h-full items-center justify-center">
                             <img
                                 alt="Skill icon"
                                 className="w-24 mb-5"
                                 src={toolskills.image}
                             />
                             <span className="title-font font-medium text-white w-full font-bold">
                                 {toolskills.title}
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