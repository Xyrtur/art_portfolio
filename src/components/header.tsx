/** @format */

import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <Link href="" className="hover:text-yellow-500 hover:underline">
        meow
      </Link>
      <Link href="" className="hover:text-yellow-500 hover:underline">
        meow
      </Link>
      <Link href="" className="hover:text-yellow-500 hover:underline">
        meow
      </Link>
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <p className="font-kolker_brush text-6xl text-yellow-500">
        Ysabelle Kmiec
      </p>
      <Navbar></Navbar>
    </div>
  );
};

export default Header;
