/** @format */

import Link from "next/link";

function NavItem({hrefName, name}:{hrefName:string, name:string}) { return(<Link href={hrefName} className="hover:text-yellow-500 hover:underline px-8">
{name}
</Link>);
}

const Header = () => {
  return (
    <div className="grid grid-rows-2 grid-flow-col p-8 justify-between">
      <p className="font-kolker_brush text-6xl text-yellow-500">
        Ysabelle
      </p>
      <p className="font-kolker_brush text-6xl text-yellow-500 pl-8 ">
      Kmiec</p>
      <div className="row-span-2">
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
