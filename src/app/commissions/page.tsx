/** @format */

import Footer from "@/components/footer";
import Head from "next/head";
import Link from "next/link";

export default function CommissionsPage() {
  return (
    <>
      <Head>
        <title>Commissions - Ysabelle Kmiec</title>
        <meta name="description">
          Learn more about her commissions pricing and details
        </meta>
      </Head>
      <main className="flex flex-col items-center">
        <p className="text-3xl text-center">Commission Your Scratchboard</p>
        <div className="grid grid-cols-2 gap-x-10">
          <div className="aspect-[9/12] row-span-2 bg-slate-500"></div>
          <div className="border-1 border-secondary-color p-14 white-space: pre-line col-start-2">
            Want a pet portrait? Have another idea? I can create a unique and
            detailed scratchboard of your concept. Scratchboards make great
            gifts for those close to you. As of right now, I am currently not
            including color.{" "}
          </div>
          <div className="border-1 border-secondary-color p14 white-space: pre-line col-start-2">
            Photos are essential, please ensure they are good quality. What to
            look for in a good picture
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-8 grid-flow-col">
          <p className="text-xl">Base Pricing</p>
          <div className="columns-2 gap-10 space-y-2">
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
          <p className="white-space: pre-line">
            Pricing can vary on factors such as subject complexity, This pricing
            includes one subject and a simple background. Framing is not
            included. Complex backgrounds can be included with additional cost.
            Additional subjects or more complex subjects such as people,
            landscape features, and inanimate objects will price higher compared
            to common pets such as dogs, cats and birds.{" "}
          </p>
          <p className="col-span-2">
            {" "}
            If you are interested, please use my phone number or the contact
            form here to get in touch with me so we can further discuss your
            idea and the process. Once the process and layout are agreed upon, I
            will send you a contract and 30% of the total price will be required
            as an initial deposit before I begin the work. Progress photos will
            be provided once a week.
          </p>
          <Link
            href="/contact"
            className="col-span-2 place-items-center border-1 border-secondary-color p-10"
          >
            Contact Me
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
