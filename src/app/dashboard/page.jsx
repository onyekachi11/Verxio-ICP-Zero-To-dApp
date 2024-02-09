"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserProfile } from "../../../slices/userSlices";

const Page = () => {
  const user = useSelector((state) => state.persistedReducer.user.userValue);
  const userProfile = useSelector(
    (state) => state.persistedReducer.user.userProfile
  );
  const router = useRouter();
  const dispatch = useDispatch();

  console.log("main", user);

  useEffect(() => {
    if (!user?.key) {
      router.push("/");
    } else if (Object.keys(userProfile).length === 0) {
      router.push("/dashboard/settings");
    } else {
      router.push("/dashboard/earn");
    }
  }, [user?.key, userProfile]);

  if (
    !user ||
    !user.key ||
    !userProfile ||
    Object.keys(userProfile).length === 0
  ) {
    return null; // Return nothing if redirection is required
  }
};

export default Page;
