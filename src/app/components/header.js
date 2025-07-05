"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger, faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

function Header(){
    const [showHam,setShowHam] = useState(true); //dont know how bt the logic is opposite. works tho.
    const [changeDisplay,setChangeDisplay] = useState("hidden");

    const changeHamState=()=>{
        setShowHam(prev =>!prev);
        showHam? setChangeDisplay("block"):setChangeDisplay("hidden");
    }

    const navHeadings=[
        {"to":"/pages/home", "link":"ROOMS"},
        {"to":"/pages/addListing", "link":"ADD"},
        // {"to":"/contact", "link":"CONTACT"},
        {"to":"/pages/login", "link":"LOGIN"}
    ]

    return (
        <>
            <nav className="relative bg-[#1F1A1D] px-4 py-2 m-5 flex items-center justify-between shadow-md rounded-4xl">
                <div>
                    <Image src='/images/logo.png' width={100} height={100} alt="logo" className=" aspect-square object-contain m-auto h-12 md:h-10 lg:h-15 pt-0 md:pt-0 lg:pt-0 "/>
                </div>
                <div className="md:hidden">
                    <button className="text-4xl text-white font-extrabold text-shadow-lg text-shadow-red-100" onClick={()=>{changeHamState()}}> <FontAwesomeIcon icon={showHam? faHamburger:faTimes} /></button>
                </div>
                <div className={`absolute ${changeDisplay} md:block right-0 top-17 md:top-0 z-50 w-4/6 md:w-full text-3xl h-screen md:h-full items-start justify-center md:relative flex m-auto`}>
                    <div className="flex flex-col md:flex-row gap-y-10 md:gap-x-4 w-full h-auto pb-5 md:pb-0 items-center justify-end font-mono font-semibold md:text-2xl text-zinc-50 bg-black opacity-70 shadow-2xl shadow-gray-500 md:shadow-none md:bg-transparent rounded-b-2xl">
                        {navHeadings.map(({ link, to }) => (
                        <div key={link} className=" md:p-2 pt-4 h-full">
                            <Link href={to} className="p-2 w-full block hover:bg-[#111] hover:scale-105 transition-all duration-200 ease-in-out" onClick={changeHamState}>{link}</Link>
                        </div>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;