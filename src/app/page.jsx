"use client";
import { permanentRedirect } from "next/navigation";
import { useEffect, useState } from "react";
import { initJuno } from "@junobuild/core-peer";
import { useNav } from "../context/nav_context";
import { authSubscribe, listDocs } from "@junobuild/core";
// import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

export default function Profile() {

  const [user ,setUser] = useState('')

  const {  setUserProfile, userProfile } = useNav();
  const [userDetailHistory, setuserDetailHistory] = useState([]);



    useEffect(() => {
      const unsubscribe = authSubscribe((newUser) => {
        setUser(newUser);
      });
      return () => {
        unsubscribe();
      };
    }, []);


    useEffect(() => {
      if (user) {
        list();
      }
    }, [user]);


    const list = async () => {
      try {
        const { items } = await listDocs({
          collection: "userProfile-details",
        });
        setuserDetailHistory(items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    useEffect(() => {
      if (userDetailHistory.length > 0) {
        const lastUserDetails = userDetailHistory[0];
        if (typeof lastUserDetails === "object") {
          setUserProfile({
            ...lastUserDetails.data,
            owner: lastUserDetails.owner,
          });
        }
      }
    }, [userDetailHistory]);

  


  useEffect(() => {
    (async () =>
      await initJuno({
        satelliteId: "tw7oh-ryaaa-aaaal-adoya-cai",
      }))();
  }, []);

  console.log('userProfile2',userProfile)
  console.log('second user',user);



  permanentRedirect("/dashboard/earn");

}
