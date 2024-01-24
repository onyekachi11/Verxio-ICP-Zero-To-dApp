import { permanentRedirect } from "next/navigation";
import { useEffect } from "react";
import { initJuno,  } from "@junobuild/core-peer";

export default async function Profile() {

  useEffect(() => {
    (async () =>
      await initJuno({
        satelliteId: "tw7oh-ryaaa-aaaal-adoya-cai",
      }))();
  }, []);
  
    permanentRedirect('/dashboard/earn');
  }
