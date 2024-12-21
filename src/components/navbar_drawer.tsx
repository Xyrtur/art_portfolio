"use client"

import { useState } from "react";
import {
    Bars3Icon, XMarkIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
export function NavbarDrawer() {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const navNameList: string[] = ["Gallery", "Commissions", "Art Process", "About The Artist", "Contact Me"];
    const navLinkList: string[] = ["gallery", "commissions", "art_process", "about_the_artist", "contact"];

    return (
        <div className="sm:hidden">
            <button type="button" className="place-items-center self-center p-2 w-12 h-12 text-sm text-white" aria-controls="navbar-hamburger" aria-expanded="false" onClick={() => {
                setDrawerOpen(true);
            }}>
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="w-8 h-8" />
            </button>
            <AnimatePresence>
                {isDrawerOpen && (

                    <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: '0' }} exit={{ x: '100%', opacity: 0 }} transition={{ duration: 0.5 }} className="absolute right-0 top-20 h-min w-min bg-black flex flex-row justify-between drop-shadow-lg rounded-lg ">
                        <div className="flex flex-col p-4">
                            {navNameList.map((_, index: number) => {
                                return (<Link className="py-2 px-4" href={navLinkList[index]}>
                                    {navNameList[index]}
                                </Link>);
                            })}
                        </div>

                        <button className="mt-2 mr-2 p-2 w-12 h-12 text-sm text-white"
                            onClick={() => {
                                setDrawerOpen(false);
                            }}
                        >
                            <XMarkIcon />
                        </button>

                    </motion.div>
                )}</AnimatePresence>
        </div>
    );
}