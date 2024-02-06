"use client"
import React, {useEffect} from 'react'
import { initJuno,  } from "@junobuild/core-peer"

const JunoProvider = ({children}) => {
  useEffect(() => {
    const initializeJuno = async () => {
      try {
        await initJuno({
          satelliteId: "tw7oh-ryaaa-aaaal-adoya-cai",
        });
      } catch (error) {
        console.error("Error initializing Juno:", error);
        // Handle the error, e.g., show a user-friendly message or redirect to an error page.
      }
    };

    initializeJuno();
  }, []);

  return <div>{children}</div>;
}

export default JunoProvider