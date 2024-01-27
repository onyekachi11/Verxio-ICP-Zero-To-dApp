"use client";
import React, { useEffect, useLayoutEffect } from "react";
import { signOut } from "@junobuild/core";
import Image from "next/image";
import SignOut from "../assets/SignOut.svg";
import { permanentRedirect, redirect } from "next/navigation";
import { useNav } from "../context/nav_context";
import { useDispatch } from "react-redux";
import { setUserValue } from "../../slices/userSlices";
import Link from "next/link";

const LogoutButton = () => {
  const { user } = useNav();

  const dispatch = useDispatch();

  const handleLogout = () => {
    signOut();
    dispatch(setUserValue({}));
  };

  return (
    <Link
      href="/"
      onClick={handleLogout}
      className="flex items-center mx-auto w-[70%] gap-3"
    >
      <Image src={SignOut} alt="" />
      <p className="text-white">Logout</p>
    </Link>
  );
};

export default LogoutButton;
