"use client";
import { permanentRedirect, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const user = useSelector((state) => state.persistedReducer.user.userValue);
  const router = useRouter();

  console.log('main',user)

  useEffect(() => {
    if (!user?.key) {
      router.push("/");
    } else {
      permanentRedirect("/dashboard/earn");
    }
  }, []);
};

export default Page;
