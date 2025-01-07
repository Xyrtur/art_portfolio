/** @format */

import { CommissionExample } from "@/components/commission_example";
import Footer from "@/components/footer";
import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 300; // seconds

export const metadata: Metadata = {
  title: "Scratchboard Art Commissions - Ysabelle Kmieć",
  description: "Learn more about scratchboard artwork commissions pricing and sizing. Pricing will vary given several factors like subject and background complexity.",
};

export default function CommissionsPage() {
  return (
    <>
      <main className="flex flex-col items-center">
        <h1 className="text-xl sm:text-2xl xl:text-3xl text-center mt-5">
          Commission Your Scratchboard
        </h1>
        <div className="flex flex-col max-sm:items-center sm:grid sm:grid-cols-[max-content_1fr] w-5/6 lg:w-3/4 2xl:w-2/3 lg:mx-24 mt-4 sm:mt-14">
          <CommissionExample />

          <div className="relative col-start-2 md:max-lg:w-3/4 lg:top-10 border-1 border-secondary-color p-10 space-y-5 sm:space-y-10 h-min 2xl:mr-[15%] sm:ml-[15%]">
            <p>
              Scratchboards of loved ones can make great gifts for those close to you. I pour as much detail and care as I can into every piece that I work on.
            </p>
            <p>
              I am currently open to doing pets, people, and natural landscape features.
            </p>
            <div className="max-md:hidden absolute top-0 left-0 -translate-y-[5%] translate-x-[5%] xl:translate-x-[2%] bg-secondary-color/30 h-[105%] w-[105%] 2xl:w-[107%]" />
          </div>
        </div>

        <div className="relative flex flex-col max-lg:items-center lg:grid lg:grid-cols-[max-content_1fr] xl:grid-cols-2 lg:grid-rows-[max-content_1fr] gap-x-14 xl:gap-x-8 lg:w-3/4 xl:w-2/3">
          <div className="text-xl text-center mt-8 w-full">
            <h2>Base Pricing</h2>
            <hr className="mt-3 mx-[25%] mb-8 border-secondary-color" />
          </div>
          <div className="lg:col-start-1 lg:columns-2 max-lg:columns-2 w-80 text-[0.9rem] sm:text-base sm:max-lg:w-96 gap-10 space-y-2 justify-self-center">
            <p>5” X 7” – $400</p>
            <p>8” X 10” – $500</p>
            <p>9” X 12” – $600</p>
            <p>12” X 12” - $700</p>
            <p>11” X 14” – $800</p>
            <p>12” X 16” – $850</p>
            <p>16” X 20” – $1,000</p>
            <p>18” X 24” – $1,350</p>
            <p>24” X 36” – $2,700</p>
          </div>
          <div className="text-[0.9rem] sm:text-base leading-relaxed sm:leading-normal lg:col-start-2 lg:row-start-1 lg:row-span-2 max-lg:mx-[10%] lg:ml-8 mt-10 space-y-4">
            <p>
              Pricing can vary on factors such as subject complexity and is
              based on a rough estimate in hours.
            </p>
            <p>
              This pricing includes one subject and a simple background. More
              complex subjects include persons or landscape features. Framing is
              not included. Complex backgrounds can be included with additional
              cost.
            </p>
            <p>
              Additional subjects or more complex subjects such as people,
              landscape features, and inanimate objects will price higher
              compared to common pets such as dogs, cats and birds.
            </p>
          </div>
          <hr className="w-[90%] lg:w-full col-span-2 my-5 md:my-10 border-secondary-color" />

          <p className="col-span-2 w-[90%] lg:w-full">
            If you are interested, please use my phone number or the contact
            form here to get in touch with me so we can further discuss your
            idea and the process. Once the process and layout are agreed upon, I
            will send you a contract and 30% of the total price will be required
            as an initial deposit before I begin the work. Progress photos will
            be provided once a week or as discussed. You can also email me to
            receive a copy of a commission contract.
          </p>
          <Link
            href="/contact"
            className="col-span-2 place-self-center mt-8 transition ease-in-out duration-300 delay-100 hover:scale-105 w-max py-2 px-5 border-1 border-secondary-color hover:cursor-pointer hover:bg-secondary-color focus:bg-secondary-color hover:text-black focus:text-black"
          >
            Contact Me
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
