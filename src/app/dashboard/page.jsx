"use client";
import { permanentRedirect, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserProfile } from "../../../slices/userSlices";

const Page = () => {
  const user = useSelector((state) => state.persistedReducer.user.userValue);
  const router = useRouter();
  const dispatch = useDispatch();

  console.log("main", user);

  useEffect(() => {
    if (!user?.key) {
      router.push("/");
    }
  }, [user?.key]);

  // useEffect(() => {
  //   fetchData();
  // }, []); // Run only once when component mounts

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://verxio-backend.vercel.app/api/v1/profiles/${user.key}`
  //     ); // Replace with your actual endpoint
  //     if (response.ok) {
  //       const responseData = await response.json();
  //       console.log(responseData);
  //       dispatch(setUserProfile(responseData.user));
  //     } else {
  //       console.error("GET request failed");
  //     }
  //   } catch (error) {
  //     console.error("Error occurred while fetching data:", error);
  //   }
  // };
};

export default Page;
