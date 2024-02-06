import React, { useEffect } from "react";
import { signIn, initJuno, authSubscribe } from "@junobuild/core";
import { useDispatch, useSelector } from "react-redux";
import { setUserValue } from "../../../slices/userSlices";
import { useNav } from "../../context/nav_context";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import Button from "../Button";
import { Logo } from "../atoms";

const HomeHeader = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.persistedReducer.user.userValue);

  // console.log('begining',user)

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
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  const handleLogin = async () => {
    if (user?.key) {
      router.push("/dashboard/earn");
    } else {
      try {
        await signIn();
        router.push("/dashboard/earn");
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
