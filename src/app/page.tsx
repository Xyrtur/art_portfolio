/** @format */

import Footer from "@/components/footer";
import { Banner } from "@/components/landing_page/banner";
import { GenericCTA } from "@/components/landing_page/page_ctas";
import Head from "next/head";

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Ysabelle Kmiec</title>
        <meta name="description">Explore scratchboard and the artist</meta>
      </Head>
      <main className="flex flex-col px-[10rem] mb-[10rem]">
        <Banner
          eventName="Crimson Alley"
          eventText="Join me in Manchester Square from Dec 7, 14 to see my works"
          showBanner={true}
        />
        <div className="flex gap-x-[15rem] items-center">
          <div className="bg-[#2E333C]/50 p-10 w-1/4 flex-initial">
            I am a Canadian scratchboard artist. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Praesent placerat dui non urna
            scelerisque, sed mattis tortor cursus.
          </div>
          <div className="bg-gray-500 w-1/2 aspect-[12/9]" />
        </div>
        <GenericCTA
          title="Head To Gallery"
          description="My collection of works thus far, showcasing the different subjects I
        have covered."
          link="/gallery"
          isGalleryCTA={true}
        />
        <GenericCTA
          title="Explore Commission Options"
          description="View pricing and size details and learn more about the commission process. "
          link="/commissions"
          isGalleryCTA={false}
        />
        <GenericCTA
          title="See The Art Process"
          description={undefined}
          link="art_process"
          isGalleryCTA={false}
        />
      </main>
      <Footer />
    </>
  );
}
