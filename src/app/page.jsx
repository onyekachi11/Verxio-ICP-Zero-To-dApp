"use client";
import { permanentRedirect } from "next/navigation";
import { useEffect } from "react";
import { initJuno } from "@junobuild/core-peer";
// import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

export default function Profile() {
  useEffect(() => {
    (async () =>
      await initJuno({
        satelliteId: "tw7oh-ryaaa-aaaal-adoya-cai",
      }))();
  }, []);
{/* <AppRouterCacheProvider> */}
  permanentRedirect("/dashboard/earn");
  // </AppRouterCacheProvider>
}
