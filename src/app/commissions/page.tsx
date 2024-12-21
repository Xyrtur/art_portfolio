/** @format */

import { CommissionExample } from "@/components/commission_example";
import Footer from "@/components/footer";
import { Metadata } from "next";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Commissions - Ysabelle Kmieć',
  description: 'Learn more about her commissions pricing and details'
}

export default function CommissionsPage() {
  return (
    <>
      <main className="flex flex-col items-center">
        <h1 className="text-3xl text-center mt-5">Commission Your Scratchboard</h1>
        <div className="grid grid-cols-2 w-2/3 mx-24 mt-14">
          <CommissionExample />
          <div className="relative col-start-2 pl-10">
            <div className="absolute top-10 border-1 border-secondary-color p-14 white-space: pre-line space-y-10 h-min mr-24">
              <p>Want a pet portrait? Have another idea? I can create a unique and
                detailed scratchboard of your concept.
              </p><p>
                Scratchboards make great
                gifts for those close to you. As of right now, I am currently not
                including color.
              </p>
            </div>
            <div className="absolute bottom-5 border-1 border-secondary-color p-14 white-space: pre-line h-min ml-24">
              Photos are essential, please ensure they are good quality. What to
              look for in a good picture
            </div>
          </div>
        </div>

        <div className="relative grid grid-cols-2  gap-x-8 w-2/3">
          <div className="text-xl text-center mt-8 "><p>Base Pricing</p><hr className="mt-3 mx-[25%] border-secondary-color" /></div>
          <div className="col-start-1 columns-2 gap-10 space-y-2 justify-self-center">

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
          <div className="col-start-2 row-start-1 row-span-2 ml-8 mt-10 space-y-4">
            <p>
              Pricing can vary on factors such as subject complexity and is based on a rough estimate in hours.
            </p>
            <p>
              This pricing includes one subject and a simple background. More complex subjects include persons or landscape features. Framing is not
              included. Complex backgrounds can be included with additional cost.
            </p>
            <p>
              Additional subjects or more complex subjects such as people,
              landscape features, and inanimate objects will price higher compared
              to common pets such as dogs, cats and birds.
            </p>
          </div>
          <hr className="w-full col-span-2 my-10 border-secondary-color" />

          <p className="col-span-2 w-full">

            If you are interested, please use my phone number or the contact
            form here to get in touch with me so we can further discuss your
            idea and the process. Once the process and layout are agreed upon, I
            will send you a contract and 30% of the total price will be required
            as an initial deposit before I begin the work. Progress photos will
            be provided once a week or as discussed.
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
