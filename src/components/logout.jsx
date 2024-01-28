"use client";
import React, { useEffect, useLayoutEffect } from "react";
import { signOut } from "@junobuild/core";
import Image from "next/image";
import SignOut from "../assets/SignOut.svg";
import { permanentRedirect, redirect } from "next/navigation";
import { useNav } from "../context/nav_context";
import { useDispatch } from "react-redux";
import { setUserValue, setUserProfile } from "../../slices/userSlices";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LogoutButton = () => {

  const dispatch = useDispatch();
  const router = useRouter()

  const handleLogout = () => {
    signOut();
    dispatch(setUserValue({}));
    dispatch(setUserProfile({}))
    router.push('/')
  };

  return (
    <div
      // href="/"
      onClick={handleLogout}
      className="flex items-center mx-auto w-[70%] gap-3 cursor-pointer"
    >
      <Image src={SignOut} alt="" />
      <p className="text-white">Logout</p>
    </div>
  );
};

export default LogoutButton;
