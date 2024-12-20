/** @format */

import Footer from "@/components/footer";
import { Banner } from "@/components/landing/banner";
import { LandingImage } from "@/components/landing/landing_image";
import { GenericCTA } from "@/components/landing/page_ctas";
import { Metadata } from "next";

export const revalidate = 300; // seconds

export const metadata: Metadata = {
  title: 'Ysabelle Kmieć',
  description: 'Explore scratchboard and the artist'
}

export default function LandingPage() {
  return (
    <>
      <main className="flex flex-col px-44">
        <Banner
          eventName="Crimson Alley"
          eventText="Join me in Manchester Square from Dec 7, 14 to see my works"
          showBanner={false}
        />
        <div className="flex gap-x-36 mb-10 ml-20">
          <div className="border-1 border-secondary-color p-10 w-1/3 flex-initial place-self-center text-lg">
            <p className="mb-3">Welcome! I am a Canadian scratchboard artist from Edmonton, Alberta.</p>
            <p>Explore the site, visit my gallery, and follow my Instagram for peeks behind the scenes</p>
          </div>
          <LandingImage />
        </div>
        <p className="w-3/4 self-center">Through the scratchboard medium, I use hyperrealism to recreate photos in an attempt to draw attention to the tiny scratches that make up the world around us. This constant texture breakdown, analysis, and reconstruction is what drives me to keep growing. With every single piece, I always have this new, intimate understanding of each texture, no matter how familiar I was at the start.</p>

        <hr className="border-secondary-color mt-32" />
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
