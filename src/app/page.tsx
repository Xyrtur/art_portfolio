/** @format */

import Footer from "@/components/footer";
import { Banner } from "@/components/landing/banner";
import { LandingImage } from "@/components/landing/landing_image";
import { GenericCTA } from "@/components/landing/page_ctas";
import { Metadata } from "next";
import { CldImage } from "next-cloudinary";


export const metadata: Metadata = {
  title: 'Ysabelle Kmiec',
  description: 'Explore scratchboard and the artist'
}

export default function LandingPage() {
  return (
    <>
      <main className="flex flex-col px-[10rem]">
        <Banner
          eventName="Crimson Alley"
          eventText="Join me in Manchester Square from Dec 7, 14 to see my works"
          showBanner={true}
        />
        <div className="flex gap-x-[15rem] items-center mb-64">
          <div className="border-1 border-secondary-color p-10 w-1/4 flex-initial">
            I am a Canadian scratchboard artist from Edmonton, Alberta. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Praesent placerat dui non urna
            scelerisque, sed mattis tortor cursus.
          </div>
          <LandingImage />

        </div>
        <hr className="border-secondary-color" />
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
