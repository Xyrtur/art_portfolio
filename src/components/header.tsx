/** @format */

import Link from "next/link";

function NavItem({ hrefName, name }: { hrefName: string; name: string }) {
  return (
    <Link
      href={hrefName}
      className="hover:text-link-color hover:underline"
    >
      {name}
    </Link>
  );
}
// bg-gradient-to-t from-indigo-500 to-lime-500

const Header = () => {
  return (
    <div className=" grid grid-rows-1 grid-flow-col p-8 justify-between bg-[100%] bg-no-repeat bg-[linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.6)),url('https://res.cloudinary.com/dsdaz0tnz/image/upload/v1734678243/scratchespink_mp3daq.png')] ">
      <Link href="/">
        <p className="font-kolker_brush text-7xl text-white pl-6 pr-3">
          Ysabelle
        </p>
        <p className="font-kolker_brush text-7xl/6 text-white pl-16">Kmieć</p>
      </Link>
      <div className="mr-8 flex flex-row items-center space-x-16 mb-14">
        <NavItem hrefName="gallery" name="Gallery" />
        <NavItem hrefName="commissions" name="Commissions" />
        <NavItem hrefName="art_process" name="Art Process" />
        <NavItem hrefName="about_the_artist" name="About The Artist" />
        <NavItem hrefName="contact" name="Contact Me" />
        <Link href="https://www.instagram.com/scraped_art.yzzy/" target="_blank">
          <svg className="w-6 h-6 text-white hover:text-link-color" width="24" strokeWidth="2"
            stroke="currentColor"
            fill="currentColor"
            height="24"
            viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">

            {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />

          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Header;
