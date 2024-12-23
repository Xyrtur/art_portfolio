/** @format */

"use client";
import { FormEvent, useState } from "react";
import { sendEmail } from "utils/send_email";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export function ContactForm() {
  const [responseMessage, setResponseMessage] = useState<string>();
  const { executeRecaptcha } = useGoogleReCaptcha();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const eventData = new FormData(event.currentTarget);
    // Clear response.
    setResponseMessage(undefined);
    // Check if executeRecaptcha is available.
    if (!executeRecaptcha) {
      setResponseMessage(
        "reCAPTCHA not available yet.reCAPTCHA key possibly not set."
      );
    } else {
      // Try getting captcha token.
      executeRecaptcha("enquiryFormSubmit").then(async (captchaToken) => {
        const data = {
          name: eventData.get("name")!.toString(),
          email: eventData.get("email")!.toString(),
          subject: eventData.get("subject")!.toString(),
          message: eventData.get("message")!.toString(),
        };
        const { name, email, subject, message } = data;
        if (name && email && subject && message) {
          // Send generated captchaToken
          const response = await sendEmail({
            name,
            email,
            subject,
            message,
            captchaToken,
          });
          if (response.error) {
            setResponseMessage(response.error);
          } else {
            setResponseMessage(response.message);
          }
        } else {
          setResponseMessage("All fields are required.");
        }
      });
    }
  }

  return (
    <form className="flex flex-col" noValidate onSubmit={onSubmit}>
      <label className="ml-2 mt-5" htmlFor="name">
        Name
      </label>
      <input
        type="text"
        title="Name"
        name="name"
        id="name"
        placeholder=" "
        required
        className="w-1/2 p-2 mt-1 text-white rounded-md bg-accent-gray border-1 border-accent-gray-border focus:border-2 text-sm focus:border-secondary-color focus:ring-secondary-color focus:outline-none"
      />

      <label className="ml-2 mt-5" htmlFor="email">
        Email Address
      </label>

      <input
        type="email"
        title="Email"
        name="email"
        id="email"
        placeholder=" "
        pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}$"
        required
        className="w-1/2 p-2 mt-1 text-white rounded-md bg-accent-gray border-1 border-accent-gray-border text-sm focus:border-2 focus:border-secondary-color focus:outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
      />

      <label className="ml-2 mt-5" htmlFor="subject">
        Subject
      </label>
      <input
        type="subject"
        title="Subject"
        name="subject"
        id="subject"
        placeholder=" "
        required
        className="w-1/2 p-2 mt-1 text-white rounded-md bg-accent-gray border-1 border-accent-gray-border text-sm focus:border-2 focus:border-secondary-color focus:outline-none"
      />

      <label className="ml-2 mt-5" htmlFor="message">
        Message
      </label>
      <textarea
        rows={10}
        title="Message"
        name="message"
        id="message"
        placeholder=" "
        required
        className="w-full p-2 mt-1 text-white rounded-md bg-accent-gray border-1 border-accent-gray-border text-sm focus:border-2 focus:border-secondary-color focus:outline-none"
      ></textarea>

      <div className="flex flex-row items-center mt-5">
        <input
          type="submit"
          title="Send"
          value="Send"
          className="transition ease-in-out duration-300 delay-100 hover:scale-105 w-max py-2 px-5 border-1 border-secondary-color rounded-lg hover:cursor-pointer hover:bg-secondary-color focus:bg-secondary-color hover:text-black focus:text-black"
        />
        {responseMessage && (
          <p className="ml-5 min-[450px]:ml-24 text-black py-2 px-3 bg-banner-color rounded-lg">
            {responseMessage}
          </p>
        )}
      </div>
    </form>
  );
}
