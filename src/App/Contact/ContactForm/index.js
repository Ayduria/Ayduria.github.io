import "./index.css"
import React, { useContext } from "react"
import { LanguageContext } from "../../../Language/languageContext"
import { useForm, ValidationError } from "@formspree/react"

function ContactForm() {
    const [state, handleSubmit] = useForm("mqkjlgbn");
    const { languageData } = useContext(LanguageContext);

    if (state.succeeded) {
        return <p>{ languageData["contact/confirmation"] }</p>
    }
    return (
        <form 
            name="contact"
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
            onSubmit={handleSubmit}>
            <div className="relative mb-4 text-left">
                <label htmlFor="name" className="leading-7 text-sm text-gray-400 font-bold">
                    { languageData["contact/label1"] }
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Smith"
                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                />
            </div>
            <div className="relative mb-4 text-left">
                <label htmlFor="email" className="leading-7 text-sm text-gray-400 font-bold">
                    { languageData["contact/label2"] }
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="johnsmith@gmail.com"
                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
            </div>
            <div className="relative mb-4 text-left">
                <label htmlFor="message" className="leading-7 text-sm text-gray-400 font-bold">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
            </div>
            <button
                type="submit"
                disabled={state.submitting}
                className="send-btn text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">   
                { languageData["contact/button"] }
            </button>
        </form>
    );
}

export default ContactForm;