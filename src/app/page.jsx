"use client"
import { permanentirect } from "next/navigation";
import { useEffect } from "react";
import { initJuno,  } from "@junobuild/core-peer";

export default function Profile() {

  useEffect(() => {
    (async () =>
      await initJuno({
        satelliteId: "tw7oh-ryaaa-aaaal-adoya-cai",
      }))();
  }, []);
  
    permanentRedirect('/dashboard/earn');
  }
