/** @format */

import Link from "next/link";

function FooterLink({ hrefName, name }: { hrefName: string; name: string }) {
  return (
    <Link
      href={hrefName}
      className="hover:text-link-color hover:underline px-6 pb-2 md:pb-3 max-sm:col-span-2 lg:self-center"
      target={name == "Instagram" ? "_blank" : undefined}
    >
      {name}
    </Link>
  );
}

const LargeFooter = () => {
  return (

    <div className="grid grid-cols-6 gap-x-8 grid-flow-col w-2/3 place-self-center max-lg:hidden">
      <ol className="row-span-4 col-span-2 place-self-center">
        <li>587-590-5467</li>
        <li>Edmonton, Alberta, Canada</li>
      </ol>
      <p className="col-span-2 pb-3 ">Browse</p>
      <hr className=" bg-white h-0.5 border-none col-span-2 mb-3 mr-3 " />
      <FooterLink hrefName="gallery" name="Gallery" />
      <FooterLink hrefName="commissions" name="Commissions" />
      <FooterLink hrefName="art-process" name="Art Process" />
      <FooterLink hrefName="about-the-artist" name="About The Artist" />


      <p className="col-span-2 pb-3">Contact</p>
      <hr className="bg-white h-0.5 border-none col-span-2 mb-3 mr-3" />
      <FooterLink hrefName="contact" name="Contact Me" />
      <FooterLink
        hrefName="https://www.instagram.com/scraped_art.yzzy/"
        name="Instagram"
      />
    </div>

  );
}

const SmallFooter = () => {
  return (<div className="w-3/4 grid grid-cols-2 space-x-8 grid-flow-col lg:hidden leading-tight place-self-center">
    <div className="flex flex-col w-full">
      <p className=" pb-3 ">Browse</p>
      <hr className=" bg-white h-0.5 border-none  mb-3 mr-3 " />
      <FooterLink hrefName="gallery" name="Gallery" />
      <FooterLink hrefName="commissions" name="Commissions" />
      <FooterLink hrefName="art-process" name="Art Process" />
      <FooterLink hrefName="about-the-artist" name="About The Artist" />
    </div>
    <div className="flex flex-col w-full">
      <p className="pb-3">Contact</p>
      <hr className="bg-white h-0.5 border-none mb-3 mr-3" />
      <FooterLink hrefName="contact" name="Contact Me" />
      <FooterLink
        hrefName="https://www.instagram.com/scraped_art.yzzy/"
        name="Instagram"
      />
    </div>
  </div>);
}

const Footer = () => {
  return (
    <footer className="w-full text-[0.9rem] mt-28 sm:mt-40">
      <div className="flex flex-col justify-center">
        <SmallFooter />
        <LargeFooter />

        <div className="lg:hidden mt-3 md:mt-8 text-center justify-center space-x-8 flex flex-row"><p >587-590-5467</p><p>Edmonton, Alberta, Canada</p></div>
        <hr className="bg-white h-0.5 border-none mt-3 place-self-center w-5/6 " />
        <p className="text-center pb-8 pt-3">
          Copyright Ysabelle Kmieć ©2025. All Rights Reserved.
        </p>
      </div>
    </footer >
  );
};

export default Footer;
