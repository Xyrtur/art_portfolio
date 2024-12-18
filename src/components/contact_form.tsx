"use client"
import { FormEvent } from "react";

export function ContactForm() {

    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const eventData = new FormData(event.currentTarget);

        // TODO: Send email.
    }

    return (
        <form className="flex flex-col" onSubmit={onSubmit}>
            <label className="ml-2 mt-5" htmlFor="name">Name</label>
            <input
                type="text"
                title="Name"
                name="name"
                id="name"
                required
                className="w-1/2 p-2 mt-1 text-white rounded-md bg-accent-gray border-1 border-accent-gray-border focus:border-2 text-sm focus:border-secondary-color focus:ring-secondary-color focus:outline-none"
            />

            <label className="ml-2 mt-5" htmlFor="email">Email Address</label>
            <input
                type="email"
                title="Email"
                name="email"
                id="email"
                required
                className="w-1/2 p-2 mt-1 text-white rounded-md bg-accent-gray border-1 border-accent-gray-border text-sm focus:border-2 focus:border-secondary-color focus:outline-none"
            />

            <label className="ml-2 mt-5" htmlFor="subject">Subject</label>
            <input
                type="subject"
                title="Subject"
                name="subject"
                id="subject"
                required
                className="w-1/2 p-2 mt-1 text-white rounded-md bg-accent-gray border-1 border-accent-gray-border text-sm focus:border-2 focus:border-secondary-color focus:outline-none"
            />

            <label className="ml-2 mt-5" htmlFor="message">Message</label>
            <textarea
                rows={10}
                title="Message"
                name="message"
                id="message"
                required
                className="w-full p-2 mt-1 text-white rounded-md bg-accent-gray border-1 border-accent-gray-border text-sm focus:border-2 focus:border-secondary-color focus:outline-none"
            ></textarea>

            <input
                type="submit"
                title="Send"
                value="Send"
                className="transition ease-in-out duration-300 delay-100 hover:scale-105 w-max mt-5 py-2 px-5 border-1 border-secondary-color rounded-lg hover:cursor-pointer hover:bg-secondary-color focus:bg-secondary-color hover:text-black focus:text-black"
            />

        </form>
    );
}