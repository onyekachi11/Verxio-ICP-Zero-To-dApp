"use client";
import React, { useEffect } from "react";
import { initJuno, authSubscribe } from "@junobuild/core-peer";
import { Logo, SidebarMenuItem } from "./atoms";
import Image from "next/image";
import AxiosLogo from "../assets/AxiosLogo.svg";
import { useNav } from "../context/nav_context";
import { NavigationItems } from "../lib/data/sideBarData";
import { useDispatch, useSelector } from "react-redux";
import LogoutButton from "./logout";

const Sidebar = () => {
  const { isOpen, toggleNav } = useNav();
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.persistedReducer.user.userProfile);

  useEffect(() => {
    const initializeJuno = async () => {
      try {
        await initJuno({
          satelliteId: "tw7oh-ryaaa-aaaal-adoya-cai",
        });
      } catch (error) {
        console.error("Error initializing Juno:", error);
        // Handle the error, e.g., show a user-friendly message or redirect to an error page.
      }
    };

    initializeJuno();
  }, []);

  return (
    <>
      {Object.keys(userProfile).length !== 0 && (
        <nav
          className={`
      ${isOpen ? "translate-x-0 absolute h-full " : "max-lg:hidden"}
      w-[340px] bg-primary z-50 h-screen `}
        >
          <div className="border-b border-dashed flex justify-center items-center px-[5%]">
            <Logo className="py-12" />
          </div>

          <div className="flex justify-between flex-col h-[calc(100%-200px)] p-3 ">
            <ul className="">
              {NavigationItems.map((item, index) => (
                <SidebarMenuItem key={`sidebar-item-${index}`} {...item} />
              ))}
            </ul>

            {/* {user ? <LogoutButton /> : <LoginButton />} */}
            <LogoutButton />

            <button className="flex items-center mx-auto w-[80%] gap-3">
              <p className="text-white text-[12px]">Powered by</p>
              <Image src={AxiosLogo} alt="Axios Logo" width={50} height={50} />
            </button>
          </div>
        </nav>
      )}
    </>
  );
};

export default Sidebar;
