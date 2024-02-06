"use client";

import React, { useEffect } from "react";
import Button from "../components/Button";

import HomeHeader from "../components/homePage/homeHeader";
import SecondSection from "../components/homePage/secondSection";
import WalletCardSection from "../components/homePage/walletCards";
import AdvancedFeaturesSection from "../components/homePage/advancedFeatures";

const Home = () => {
  return (
    <div className="w-full h-full bg-primary text-white  ">
      <div className="h-full overflow-scroll">
        <HomeHeader />
        <SecondSection />
        <WalletCardSection />
        <AdvancedFeaturesSection/>
      </div>
    </div>
  );
};

export default Home;
