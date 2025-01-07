/** @format */

import { ProfilePicture } from "@/components/profile_picture";
import Footer from "@/components/footer";
import { Timeline } from "@/components/timeline";
import { Metadata } from "next";

export const revalidate = 300; // seconds

export const metadata: Metadata = {
  title: "About The Artist - Ysabelle Kmieć",
  description: "Ysabelle Kmieć is a Canadian scratchboard artist from Edmonton, Alberta. Her passion for scratchboard fuels her work and aspirations to one day do this full-time.",
};

export default function AboutTheArtistPage() {
  return (
    <>
      <main className="">
        <div className="min-[800px]:hidden flex flex-col items-center mx-[5%] sm:mx-[10%]">
          <h1 className="text-3xl text-secondary-color min-[800px]:pb-10 mt-5">
            About The Artist
          </h1>
          <ProfilePicture />
          <p className="text-lg min-[800px]:-translate-x-5 w-full mb-12  bg-secondary-color/25 p-3 max-[800px]:p-5 text-white">
            &#34;Climb rock, shoot rock, draw rock, scratch rock, be rock. Also applying to waterfalls&#34;
          </p>

          <p className="w-[90%] mb-10 text-[0.9rem] xl:text-base leading-loose xl:leading-normal">
            Born and raised in Edmonton, Alberta, I have been working with
            scratchboard for the past 3 years. I was first introduced to this
            medium in highschool and later on revisited it in university. My love for cats
            fueled my first few pieces back then. It felt natural for me to work with this
            medium and I have thoroughly enjoyed slowly introducing myself to new textures other
            than fur.
          </p>
          <p className="w-[90%] mb-10 text-[0.9rem] xl:text-base leading-loose xl:leading-normal">
            Growing up near the Rockies, I have always loved the mountains and I
            am currently branching out into more natural landscapes, hoping to capture
            the beauty of the national parks and mountains around me. My dream
            is to become a full-time scratchboard artist later on in life. I will
            be pursuing a fine arts degree within the next few years to help realize my dream.
          </p>

          <div className="border-secondary-color border-1 p-5 lg:p-8 w-full lg:w-[75%]">
            <p className="text-lg pb-3">Current Associations</p>
            <p className="pb-10 text-sm pl-3">Active Member - ISSA</p>
            <p className="text-lg pb-3">Education</p>
            <p className="text-sm pl-3">
              University of Toronto, BASc Electrical Engineering - 2024
            </p>
          </div>
          <div className="flex justify-center mt-8 visible 2xl:invisible">
            <Timeline showTitle={false} />
          </div>
        </div>
        <div className="max-[800px]:hidden flex flex-row space-x-16 lg:space-x-14 2xl:space-x-20 mx-[5%] xl:mx-[10%] ">
          <div className="flex flex-col items-center">
            <ProfilePicture />
            <div className="border-secondary-color border-1 p-5 lg:p-8 w-full lg:w-[75%] mt-8">
              <p className="text-lg pb-3">Current Associations</p>
              <p className="pb-10 text-sm pl-3">Active Member - ISSA</p>
              <p className="text-lg pb-3">Education</p>
              <p className="text-sm pl-3">
                University of Toronto, BASc Electrical Engineering - 2024
              </p>
            </div>
            <div className="flex justify-center mt-8 visible 2xl:invisible">
              <Timeline showTitle={false} />
            </div>
          </div>
          <div className="flex flex-col w-2/3">
            <h1 className="text-3xl text-secondary-color pb-10 mt-5">
              About The Artist
            </h1>
            <p className="text-lg -translate-x-5 w-full mb-12 bg-secondary-color/25 p-5 text-white">
              &#34;Climb rock, shoot rock, draw rock, scratch rock, be rock. Also applying to waterfalls&#34;
            </p>

            <p className="w-[90%] mb-10 text-[0.9rem] xl:text-base leading-loose xl:leading-normal">
              Born and raised in Edmonton, Alberta, I have been working with
              scratchboard for the past 3 years. I was first introduced to this
              medium in highschool and later on revisited it in university. My love for cats
              fueled my first few pieces back then. It felt natural for me to work with this
              medium and I have thoroughly enjoyed slowly introducing myself to new textures other
              than fur.
            </p>
            <p className="w-[90%] mb-10 text-[0.9rem] xl:text-base leading-loose xl:leading-normal">
              Growing up near the Rockies, I have always loved the mountains and
              I am currently branching out into more landscapes, hoping to
              capture the beauty of the national parks and mountains around me.
              My dream is to become a full-time scratchboard artist later on in
              life. I will be pursuing a fine arts degree within the next few years to help realize my dream.
            </p>
            <p className="w-[90%] text-[0.9rem] xl:text-base leading-loose xl:leading-normal">
              This website is as much for you as it is a personal journal for
              myself. I created a rough timeline for myself to track my
              progress. Feel free to check back in throughout the years as I
              grow!{" "}
            </p>
            <div className="flex justify-center mt-8 invisible 2xl:visible">
              <Timeline showTitle={false} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
