/** @format */

import { ProfilePicture } from "@/components/profile_picture";
import Footer from "@/components/footer";
import { Timeline } from "@/components/timeline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About The Artist - Ysabelle ',
  description: 'Biography'
}

export default function AboutTheArtistPage() {
  return (
    <>
      <main className="flex flex-row ml-[15%] space-x-20 mr-[10%]">
        <div className="flex flex-col items-center">
          <ProfilePicture />
          <div className="border-secondary-color border-1 p-8 w-[75%] mt-8">
            <p className="text-lg pb-3">Current Associations</p>
            <p className="pb-10 text-sm pl-3">Active Member - ISSA</p>
            <p className="text-lg pb-3">Education</p>
            <p className="text-sm pl-3">University of Toronto, BASc Electrical Engineering - 2024</p>
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <h1 className="text-3xl text-secondary-color pb-10 mt-5">About The Artist</h1>
          <p className="text-lg -translate-x-5 w-full mb-12 bg-secondary-color/25 p-5 text-white">"The goal I work towards is having the ability to close my eyes and envision my subject or surroundings on a scratchboard."</p>

          <p className="w-[90%] mb-10">Born and raised in Edmonton, Alberta, I have been working with scratchboard  for the past 5 years. I was first introduced to this medium in highschool and my love for cats fueled my first few pieces. It felt natural for me to work with this medium and I have thoroughly enjoyed slowly introducing myself to new textures other than fur. Growing up near the Rockies, I have always loved the mountains and I am currently branching out into more landscapes, hoping to capture the beauty of the national parks and mountains around me. My dream is to become a full-time scratchboard artist later on in life.</p>
          <p className="w-[90%]">This website is as much for you as it is a personal journal for myself. I created a rough timeline for myself to track my progress.  Feel free to check back in throughout the years as I grow! </p>
          <div className="flex justify-center mt-8"><Timeline showTitle={false} /></div>
        </div>
      </main>
      <Footer />

    </>
  );
}