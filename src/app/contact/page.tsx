/** @format */

import { ProfilePicture } from "@/components/profile_picture";
import Footer from "@/components/footer";
import { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact_form";
import CaptchaProvider from "@/components/contact/captcha_provider";

export const metadata: Metadata = {
  title: 'Contact - Ysabelle Kmiec',
  description: 'Get in touch with Ysabelle Kmiec'
}

export default function ContactPage() {
  return (
    <>

      <main className="flex flex-row space-x-44 ml-[10%] mr-[15%]">
        <div className="flex flex-col items-center text-sm space-y-2">
          <ProfilePicture />
          <p>Ysabelle Kmiec</p>
          <p>Edmonton, Alberta, Canada</p>
          <p>(587)-590-5467</p>
          <div className="relative text-base w-3/4">
            <p className="mt-8">If you have any questions or would like to know more about my process, commissions, or just want to say hi, feel free to drop me a message through this form. </p>
            <div className="absolute mt-8 top-0 left-0 translate-x-5 translate-y-7 w-[105%] h-[95%] bg-secondary-color/25" />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <h1 className="text-xl mb-7 pl-8">Contact Form</h1>
          <CaptchaProvider>
            <ContactForm />
          </CaptchaProvider>
        </div>


      </main>
      <Footer />

    </>
  );
}