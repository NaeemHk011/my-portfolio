import { Bars3Icon } from "@heroicons/react/16/solid";
import React from "react";
import Link from 'next/link';
interface Props {
    openNav: () => void;
}

const Navbar = ({ openNav }: Props) => {


    return (<div className="w-[100%] flexed z-[10000] h-[12vh] bg-[#141c27] shadow-md" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 10000 }}>


        <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
            <h1 className="flex-[0-6] cursor-pointer text-[25px] text-white font-bold pr-80">WEB
                <span className="text-yellow-300">DEV</span></h1>
            <Link href="#">
                <span className="nav-link">HOME</span>
            </Link>
            <Link href="#">
                <span className="nav-link">SERVICES</span>
            </Link>
            <Link href="#">
                <span className="nav-link">PROJECTS</span>
            </Link>
            <Link href="#">
                <span className="nav-link">BLOG</span>
            </Link>
            <Link href="#">
                <span className="nav-link">CONTACT</span>
            </Link>
            <Link href="#">
                <span className="nav-link">ABOUT</span>
            </Link>

            <div onClick={openNav}>
                <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
            </div>
        </div>
    </div>);

}
export default Navbar