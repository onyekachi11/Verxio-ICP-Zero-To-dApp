"use client";
import { permanentRedirect, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const AuthProvider = ({ children }) => {
  const router = useRouter();
  const user = useSelector((state) => state.persistedReducer.user.userValue);

  useEffect(() => {
    if (!user?.key) {
      router.push("/");
    } else {
      //   permanentRedirect("/dashboard/earn");
    //   permanentRedirect( "/dashboard/earn");
      router.push("/dashboard/earn");

    }
  }, [user?.key, router]);
  return <div>{children}</div>;
};

export default AuthProvider;
