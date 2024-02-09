"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { signIn, authSubscribe, initJuno } from "@junobuild/core-peer";
import { useDispatch, useSelector } from "react-redux";
import {
  setEditUser,
  setUserProfile,
  setUserValue,
} from "../../../slices/userSlices";
// import { useNav } from "../../context/nav_context";
// import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import Button from "../Button";
import { Logo } from "../atoms";

const HomeHeader = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.persistedReducer.user.userValue);
  const userProfile = useSelector(
    (state) => state.persistedReducer.user.userProfile
  );

  console.log("user", user);
  console.log("userProfile", userProfile);

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

  useEffect(() => {
    const unsubscribe = authSubscribe((userData) => {
      if (userData) {
        const { key, owner } = userData;
        dispatch(setUserValue({ key, owner }));
      }
    });

    // fetchData(user?.key);
    return () => {
      unsubscribe();
    };
  }, [dispatch, user?.key]);

  // useEffect(() => {
  //   fetchData(user?.key);
  // }, [user?.key]); // Run only once when component mounts

  const fetchData = async (value) => {
    try {
      const response = await fetch(
        `https://verxio-backend.vercel.app/api/v1/profiles/${value}`
      ); // Replace with your actual endpoint
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        dispatch(setUserProfile(responseData.user));
      } else {
        console.error("GET request failed");
        if (error) {
          console.log(response);
        }
      }
    } catch (error) {
      console.log("Error occurred while fetching data:", error);
    }
  };

  // useLayoutEffect(() => {
  //   if (!user?.key) {
  //     router.push("/");
  //   }
  // });

  const handleLogin = async () => {
    if (user?.key && Object.keys(userProfile).length !== 0) {
      router.push("/dashboard/earn");
    } else if (user?.key && Object.keys(userProfile).length == 0) {
      dispatch(setEditUser(true));
      router.push("/dashboard/settings");
    } else {
      try {
        await signIn();
        fetchData(user?.key);
        if (Object.keys(userProfile).length == 0) {
          router.push("/dashboard/settings");
        } else {
          router.push("/dashboard/earn");
        }
      } catch (error) {
        console.error("Error during sign-in:", error);
      }
    }
  };

  return (
    <div className="flex justify-between  items-center w-full h-[100px] px-[45px] py-[40px]">
      <Logo className="w-[48px]" />
      <div>
        <ul className="flex gap-6 font-normal text-[14px] text-white">
          <li>Home</li>
          <li>Find a job</li>
          <li>Learn</li>
          <li>DAO</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </div>
      <Button
        name="Get started"
        onClick={() => handleLogin()}
        outline
        className="border-white text-[14px] text-white"
      />
    </div>
  );
};

export default HomeHeader;
