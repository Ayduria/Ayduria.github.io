// src/components/Contact.js
import "./index.css"
import React from "react"
import { EnvelopeIcon } from "@heroicons/react/24/solid"
import ContactForm from "./ContactForm"

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
                    <a href="mailto:lapointeannlaurie@gmail.com">
                        <EnvelopeIcon className="w-10 inline-block mb-4"/>
                    </a>
                </div>
                <ContactForm />
            </div>
        </section>
    );
}

export default Contact;