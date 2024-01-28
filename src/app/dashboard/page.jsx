import { useLayoutEffect } from "react";
import { permanentRedirect, redirect } from "next/navigation";
import { useSelector } from "react-redux";

const Page = () => {
  // const {user}= useNav()
    const user = useSelector((state) => state.persistedReducer.user.userValue);
    // console.log('second',user)

  // // permanentRedirect("/dashboard/earn");
  //   useLayoutEffect(() => {
  //     if (!user) {
  //       redirect("/");
  //     }
  //   }, [user]);
};

export default Page;
