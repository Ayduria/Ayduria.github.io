// src/components/Contact.js

import React from "react"
import { useForm, ValidationError } from "@formspree/react"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import { EnvelopeIcon } from "@heroicons/react/24/solid"

function ContactForm() {
    const { executeRecaptcha } = useGoogleReCaptcha();

    const [state, handleSubmit] = useForm("mqkjlgbn");

    if (state.succeeded) {
        return <p>Merci de m'avoir contacté !</p>
    }
    return (
        <form 
            name="contact"
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
            onSubmit={handleSubmit}>
            <div className="relative mb-4 text-left">
                <label htmlFor="name" className="leading-7 text-sm text-gray-400 font-bold">
                    Nom
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
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
                    Adresse courriel
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
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
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">   
                Envoyer
            </button>
        </form>
    );
}

function Contact() {
    return(
        <section id="contact" className="relative">
            <h2 className="w-full text-white sm:text-4xl text-3xl font-medium title-font mt-10">
                Contactez-moi !
            </h2>
            <div className="container mx-auto flex px-10 pt-6 pb-10 md:flex-row flex-col items-center md:items-start">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:text-left mb-16 md:mb-0">
                    <p className="leading-relaxed mb-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                        suscipit officia aspernatur veritatis. Asperiores, aliquid?  
                    </p>
                </div>
                <ContactForm />
            </div>
        </section>
    );
}

export default Contact;