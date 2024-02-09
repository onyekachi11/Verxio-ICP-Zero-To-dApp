"use client";
import { permanentRedirect, useRouter } from "next/navigation";
import React, { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEditUser } from "../../slices/userSlices";

const AuthProvider = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch()
  const user = useSelector((state) => state.persistedReducer.user.userValue);
  const userProfile = useSelector((state) => state.persistedReducer.user.userProfile);

  useLayoutEffect(() => {
    if (!user?.key)  {
      router.push("/");
    } else if (user.key && userProfile && Object.keys(userProfile).length == 0) {
      dispatch(setEditUser(true));
      router.push("/dashboard/settings");
    }
  }, [user?.key, router, userProfile]);
  return <div>{children}</div>;
};

export default AuthProvider;
