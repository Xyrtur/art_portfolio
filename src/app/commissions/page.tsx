/** @format */

import Footer from "@/components/footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Commissions - Ysabelle Kmiec',
  description: 'Learn more about her commissions pricing and details'
}

export default function CommissionsPage() {
  return (
    <>
      <main className="flex flex-col items-center">
        <p className="text-3xl text-center">Commission Your Scratchboard</p>
        <div className="grid grid-cols-2 gap-x-24 w-2/3 mt-14">
          <div className="aspect-[9/12] bg-slate-500 h-[30rem] justify-self-end"></div>
          <div className="relative col-start-2">
            <div className="absolute top-10 border-1 border-secondary-color p-14 white-space: pre-line space-y-10 h-min mr-24">
              <p>Want a pet portrait? Have another idea? I can create a unique and
                detailed scratchboard of your concept.
              </p><p>
                Scratchboards make great
                gifts for those close to you. As of right now, I am currently not
                including color.
              </p>
            </div>
            <div className="absolute bottom-0 border-1 border-secondary-color p-14 white-space: pre-line h-min ml-24">
              Photos are essential, please ensure they are good quality. What to
              look for in a good picture
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-8 w-2/3">
          <p className="text-xl w-full text-center my-8 ">Base Pricing</p>
          <div className="col-start-1 columns-2 gap-10 space-y-2 w-2/3 place-self-center">

            <p>5” X 7” – $800</p>
            <p>8” X 10” – $1,800</p>
            <p>9” X 12” – $1,900</p>
            <p>12” X 12” - $2,400</p>
            <p>11” X 14” – $2,500</p>
            <p>12” X 16” – $3,200</p>
            <p>14” X 18” – $3,500</p>
            <p>16” X 20” – $4,200</p>
            <p>18” X 24” – $5,700</p>
            <p>24” X 30” – $10,000</p>
            <p>24” X 36” – $12,000</p>
          </div>
          <div className="w-5/6 space-y-4">
            <p>
              Pricing can vary on factors such as subject complexity.
            </p>
            <p>
              This pricing includes one subject and a simple background. Framing is not
              included. Complex backgrounds can be included with additional cost.
            </p>
            <p>
              Additional subjects or more complex subjects such as people,
              landscape features, and inanimate objects will price higher compared
              to common pets such as dogs, cats and birds.
            </p>
          </div>

          <p className="col-span-2 w-full mt-14">

            If you are interested, please use my phone number or the contact
            form here to get in touch with me so we can further discuss your
            idea and the process. Once the process and layout are agreed upon, I
            will send you a contract and 30% of the total price will be required
            as an initial deposit before I begin the work. Progress photos will
            be provided once a week.
          </p>
          <Link
            href="/contact"
            className="col-span-2 text-center border-1 border-secondary-color p-4 w-[12%] place-self-center mt-8 hover:text-secondary-color"
          >
            Contact Me
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
