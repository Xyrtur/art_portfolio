/** @format */

import Link from "next/link";

export function Banner({
  eventName,
  eventText,
  showBanner,
}: {
  eventName: string;
  eventText: string;
  showBanner: boolean;
}) {
  return (
    <Link
      href="/"
      className={`flex place-self-center bg-banner-color rounded-2xl space-x-2 text-black items-center py-1 px-8 mb-10 -translate-y-5 ${showBanner ? "visible" : "invisible"
        }`}
    >
      <p className="">{eventName} </p>
      <p className="text-3xl mb-3">.</p>
      <p className="">{eventText}</p>
      <svg
        className="h-6 w-6 text-black"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {" "}
        <path stroke="none" d="M0 0h24v24H0z" />{" "}
        <line x1="5" y1="12" x2="19" y2="12" />{" "}
        <line x1="15" y1="16" x2="19" y2="12" />{" "}
        <line x1="15" y1="8" x2="19" y2="12" />
      </svg>
    </Link>
  );
}
