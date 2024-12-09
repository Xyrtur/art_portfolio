/** @format */

import Link from "next/link";

export function GenericCTA({
  title,
  description,
  link,
  isGalleryCTA,
}: {
  title: string;
  description: string | undefined;
  link: string;
  isGalleryCTA: boolean;
}) {
  return (
    <Link
      href={link}
      className={`group flex flex-col ml-[8%] ${
        isGalleryCTA
          ? "mb-10 mt-[5rem]"
          : "border-1 border-white p-8 w-1/2 my-8 ml-[11rem]"
      } `}
    >
      <div
        className={`flex flex-row space-x-4 ${
          isGalleryCTA ? "visible" : "collapse"
        }`}
      >
        <div className="bg-gray-500 aspect-[12/9] w-1/4" />
        <div className="bg-gray-500 aspect-[12/9] w-1/4" />
        <div className="bg-gray-500 aspect-[12/9] w-1/4" />
        <div className="bg-gray-500 aspect-[12/9] w-1/4" />
      </div>
      <div className="flex flex-row items-center">
        <p
          className={`text-2xl group-hover:text-secondary-color ${
            isGalleryCTA ? "pt-8 pl-20" : ""
          }`}
        >
          {title}
        </p>
        <svg
          className={`${
            isGalleryCTA ? "mt-8" : ""
          } h-6 w-10 text-white transition ease-in-out duration-300 group-hover:translate-x-2`}
          width="30"
          height="24"
          viewBox="0 0 30 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <line x1="5" y1="12" x2="25" y2="12" />{" "}
          <line x1="21" y1="16" x2="25" y2="12" />{" "}
          <line x1="21" y1="8" x2="25" y2="12" />
        </svg>
      </div>
      <p
        className={`${isGalleryCTA ? "pl-28" : "pl-8"} pt-3 ${
          description == undefined ? "collapse" : ""
        }`}
      >
        {description}
      </p>
    </Link>
  );
}
