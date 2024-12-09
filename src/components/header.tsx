/** @format */

import Link from "next/link";

function NavItem({ hrefName, name }: { hrefName: string; name: string }) {
  return (
    <Link
      href={hrefName}
      className="hover:text-link-color hover:underline px-8"
    >
      {name}
    </Link>
  );
}

const Header = () => {
  return (
    <div className="grid grid-rows-1 grid-flow-col p-8 justify-between">
      <Link href="/">
        <p className="font-kolker_brush text-7xl text-white pl-6 pr-3">
          Ysabelle
        </p>
        <p className="font-kolker_brush text-7xl/6 text-white pl-16">Kmiec</p>
      </Link>
      <div className="row-span-1">
        <NavItem hrefName="gallery" name="Gallery" />
        <NavItem hrefName="commissions" name="Commissions" />
        <NavItem hrefName="art_process" name="Art Process" />
        <NavItem hrefName="about_the_artist" name="About The Artist" />
        <NavItem hrefName="contact" name="Contact Me" />
      </div>
    </div>
  );
};

export default Header;
