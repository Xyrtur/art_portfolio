/** @format */

"use client";

import { useEffect, useRef, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
export function NavbarDrawer() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!ref.current?.contains(event.target as Node)) {
        setDrawerOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  const navNameList: string[] = [
    "Artwork Gallery",
    "Commissions",
    "Art Process",
    "About The Artist",
    "Contact",
  ];
  const navLinkList: string[] = [
    "gallery",
    "commissions",
    "art-process",
    "about-the-artist",
    "contact",
  ];

  return (

    <div className="sm:hidden z-20">
      <button
        type="button"
        className="place-items-center self-center p-2 w-12 h-12 text-sm text-white"
        aria-controls="navbar-hamburger"
        aria-expanded="false"
        onClick={() => {
          setDrawerOpen(true);
        }}
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="w-8 h-8" />
      </button>
      <AnimatePresence >
        {isDrawerOpen && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0" }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute right-0 top-20 h-min w-min bg-black flex flex-row justify-between drop-shadow-lg rounded-lg "
          >
            <div className="flex flex-col p-4">
              {navNameList.map((_, index: number) => {
                return (
                  <Link
                    key={navLinkList[index]}
                    onClick={() => { setDrawerOpen(false) }}
                    className="py-2 px-4"
                    href={navLinkList[index]}
                  >
                    {navNameList[index]}
                  </Link>
                );
              })}
            </div>

            <button
              className="mt-2 mr-2 p-2 w-12 h-12 text-sm text-white"
              onClick={() => {
                setDrawerOpen(false);
              }}
            >
              <XMarkIcon />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
