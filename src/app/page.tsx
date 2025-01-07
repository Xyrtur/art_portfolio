/** @format */

import Footer from "@/components/footer";
import { Banner } from "@/components/landing/banner";
import { LandingImage } from "@/components/landing/landing_image";
import { GenericCTA } from "@/components/landing/page_ctas";
import { Metadata } from "next";

export const revalidate = 300; // seconds

export const metadata: Metadata = {
  title: "Scratchboard Artwork Portfolio | Ysabelle Kmieć",
  description: "Ysabelle Kmieć is a Canadian scratchboard artist from Edmonton, Alberta and is currently working to specialise in natural landscapes.",
};

export default function LandingPage() {
  return (
    <>
      <main className="flex flex-col xl:px-24 2xl:px-44">
        <Banner
          eventName="Crimson Alley"
          eventText="Join me in Manchester Square from Dec 7, 14 to see my works"
          showBanner={false}
        />
        <div className="flex flex-col lg:pl-16 2xl:pl-0 lg:flex-row-reverse lg:gap-x-5 2xl:max-[1800px]:gap-x-24 min-[1800px]:gap-x-36 mb-10">
          <LandingImage />
          <div className="border-1 border-secondary-color p-5 sm:p-10 w-5/6 md:w-2/3 2xl:max-[1800px]:w-1/2 min-[1800px]:w-1/3 max-lg:mt-5 flex-initial place-self-center text-lg">
            <p className="mb-3">
              Welcome! I am a Canadian scratchboard artist from Edmonton,
              Alberta.
            </p>
            <p>
              Explore the site, visit my gallery, and follow my Instagram for
              upcoming events and works in progress.
            </p>
          </div>
        </div>
        <p className="w-3/4 self-center">
          Through the scratchboard medium, I use hyperrealism to recreate photos
          in an attempt to draw attention to the tiny scratches that make up the
          world around us. This constant texture breakdown, analysis, and
          reconstruction is what drives me to keep growing. With every single
          piece, I always have this new, intimate understanding of each texture,
          no matter how familiar I was at the start.
        </p>

        <hr className="border-secondary-color mt-16 sm:mt-32 mx-10 sm-max-xl:mx-16" />
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
          link="art-process"
          isGalleryCTA={false}
        />
      </main>
      <Footer />
    </>
  );
}
