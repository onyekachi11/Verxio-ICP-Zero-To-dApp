"use client";

import React, { useEffect } from "react";
import Button from "../components/Button";
import { signIn, initJuno, authSubscribe } from "@junobuild/core";
import { useDispatch, useSelector } from "react-redux";
import { setUserValue } from "../../slices/userSlices";
import { useNav } from "../context/nav_context";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";


const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  const user = useSelector((state) => state.persistedReducer.user.userValue);

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
      dispatch(setUserValue(userData));
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

const handleLogin = async () => {
  if (user?.key) {
    // Use the next/navigation redirect function here
  //  return redirect("/dashboard/earn");
   router.push("/dashboard/earn");
  } else {
    try {
      // Assuming signIn returns a Promise
      await signIn();
      // Redirect after successful sign-in
      // redirect("/dashboard/earn");
      router.push('/dashboard/earn')
    } catch (error) {
      console.error("Error during sign-in:", error);
      // Handle the error, e.g., show a user-friendly message or redirect to an error page.
    }
  }
};


  return (
    <div className="flex justify-center items-center h-screen">
      <Button name="enter App" onClick={()=> handleLogin()} />
    </div>
  );
};

export default Home;
