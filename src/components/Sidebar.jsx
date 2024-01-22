"use client";
import React from "react";
import Button from "./Button";
// import { signOut } from "next-auth/react";
import { Logo, SidebarMenuItem } from "./atoms";
// import Logout from "@/assets/logout.svg";
import Logout from "../assets/logout.svg";
import Image from "next/image";
import { useNav } from "../context/nav_context";
import { NavigationItems } from "../lib/data/sideBarData";

const Sidebar = () => {
  // const handleSignOut = () => signOut();
  const { isOpen, toggleNav } = useNav();

  return (
    <>
      {/* {isOpen && (
        <button
          onClick={toggleNav}
          className={`fixed md:hidden top-0 left-0 w-screen h-screen z-30 backdrop-blur-[1px] bg-[rgba(0,0,0,0.1)]`}
        ></button>
      )} */}
      <nav
        className={`
      ${
        isOpen ? "translate-x-0 absolute h-full " : "max-lg:hidden"
      } w-[340px] bg-primary z-50 h-screen `}
      >
        <div className="border-b border-dashed flex justify-center items-center px-[5%]">
          <Logo className="py-12" />
        </div>

        <div className="flex justify-between flex-col h-[calc(100%-200px)] p-3 ">
          <ul className="">
            {NavigationItems.map((item, index) => (
              <SidebarMenuItem key={`sidebar-item-${index}`} {...item} />
              // <div></div>
            ))}
          </ul>

          <button className=" flex items-center  mx-auto w-[70%] gap-3">
            <Image src={Logout} alt="" />
            <p className="text-white">Logout</p>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;

{
  /* {isOpen && (
        <button
          onClick={toggleNav}
          className={`fixed md:hidden top-0 left-0 w-screen h-screen z-30 backdrop-blur-[1px] bg-[rgba(0,0,0,0.1)]`}
        ></button>
      )}
      <nav
        className={`${isOpen ? "translate-x-0" : "-translate-x-[100%]"}  `}
        // }  fixed lg:translate-x-0 bg-[#0D0E32] lg:relative z-50  overflow-y-scroll min-w-[220px] shadow-2xl flex flex-col min-h-screen py-4 max-h-screen transition-all duration-300`}
      >
        <div className="border-b border-dashed flex justify-center items-center px-[5%]">
          <Logo className="py-12" />
        </div>

        <ul className="w-full max-h-[MAX(270px,75%) py-8 flex flex-col gap-4 overflow-y-scroll scroll-hidden">
          {NavigationItems.map((item, index) => (
            <SidebarMenuItem key={`sidebar-item-${index}`} {...item} />
          ))}
        </ul>

        <Button className="mb-[5%] justify-start mt-auto w-full mx-auto max-w-[80%] bg-transparent text-primary">
          <Image src={Logout} alt="" /> Logout
        </Button>
      </nav> */
}
