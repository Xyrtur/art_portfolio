/** @format */

import Link from "next/link";

function FooterLink({ hrefName, name }: { hrefName: string; name: string }) {
  return (
    <Link
      href={hrefName}
      className="hover:text-link-color hover:underline px-6 pb-3"
      target={name == "Instagram" ? "_blank" : undefined}
    >
      {name}
    </Link>
  );
}

const Footer = () => {
  return (
    <footer className="w-full text-[0.9rem] mt-[10rem]">
      <div className="flex flex-col justify-center">
        <div className="grid grid-cols-6 gap-x-8 grid-flow-col w-2/3 place-self-center">
          <ol className="row-span-4 col-span-2 place-self-center">
            <li>587-590-5467</li>
            <li>Edmonton, Alberta, Canada</li>
          </ol>

          <p className="col-span-2 pb-3">Browse</p>
          <hr className="bg-white h-0.5 border-none col-span-2 mb-3 mr-3 " />
          <FooterLink hrefName="gallery" name="Gallery" />
          <FooterLink hrefName="commissions" name="Commissions" />
          <FooterLink hrefName="art_process" name="Art Process" />
          <FooterLink hrefName="about_the_artist" name="About The Artist" />
          <p className="col-span-2 pb-3">Contact</p>
          <hr className="bg-white h-0.5 border-none col-span-2 mb-3 mr-3" />
          <FooterLink hrefName="contact" name="Contact Me" />
          <FooterLink
            hrefName="https://www.instagram.com/scraped_art.yzzy/"
            name="Instagram"
          />
        </div>
        <hr className="bg-white h-0.5 border-none mt-8 place-self-center w-5/6 " />
        <p className="text-center pb-8 pt-3">
          Copyright Ysabelle Kmiec ©2024. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
