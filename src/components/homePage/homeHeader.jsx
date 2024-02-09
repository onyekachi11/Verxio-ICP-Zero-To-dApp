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
import { throttle } from "lodash";
import { toast } from "sonner";


const HomeHeader = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.persistedReducer.user.userValue);
  const userProfile = useSelector(
    (state) => state.persistedReducer.user.userProfile
  );
  // const throttledFetchData = throttle((key) => fetchData(key), 1000);
  // const throttledUnsubscribe = throttle((key) => unsubscribe, 1000);

  const [user2, setUser2] = useState(null);

  console.log("user", user);
  console.log("userProfile", userProfile);
  console.log("user2", user2);

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

  const fetchData = async (value) => {
    try {
      const response = await fetch(
        `https://verxio-backend.vercel.app/api/v1/profiles/${value}`
      ); // Replace with your actual endpoint
      if (response.ok) {
        const responseData = await response.json();
        // console.log(responseData);
        dispatch(setUserProfile(responseData.user));
        setUser2(responseData.user);
        router.push("/dashboard");
        toast.success("Login Successfull");
      } else {
        console.error("GET request failed");
        // console.log(response.status);
        if (response.status === 404) {
          toast.info("Pls create account");
          router.push("/dashboard/settings");
        }
      }
      // return response;
    } catch (error) {
      console.log("Error occurred while fetching data:", error);
    }
  };

  const handleLogin = async () => {
    if (user?.key && userProfile !== false) {
      router.push("/dashboard");
    } else if (!user?.key && !user2) {
      signIn();
      authSubscribe((userData) => {
        if (userData) {
          const { key, owner } = userData;
          dispatch(setUserValue({ key, owner }));
        }
      });
    }
    // fetchData(user?.key);
  };

  // user?.key && fetchData(user?.key);

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
      {user?.key ? (
        <Button
          name="enter app"
          onClick={() => {
            // handleLogin();
            fetchData(user?.key);
          }}
          outline
          className="border-white text-[14px] text-white"
        />
      ) : (
        <Button
          name=" Get Started"
          onClick={() => {
            handleLogin();
          }}
          outline
          className="border-white text-[14px] text-white"
        />
      )}
    </div>
  );
};

export default HomeHeader;
