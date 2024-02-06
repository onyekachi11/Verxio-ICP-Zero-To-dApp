import Image from "next/image";
import React from "react";
import Metamask from "../../assets/metamaskwallet.png";
import Human from "../../assets/human-walking.svg";
import Plugs from "../../assets/PlugsConnected.svg";
import Guage from "../../assets/Gauge.svg";
import DownDir from "../../assets/direction-down.svg";
import UpDir from "../../assets/direction-up.svg";

const WalletCards = () => {
  return (
    <div className="mt-[100px] flex  flex-col justify-center items-center">
      <div className="flex ">
        <Image alt="metamask image" src={Metamask} />
        <Image alt="metamask image" src={Metamask} className="-skew-y-6" />
      </div>

      <div className="flex text-[18px] font-medium items-center gap-5 mt-12">
        <div className="flex items-center gap-2">
          <Image src={Human} alt="icon" />
          <p>Get Started</p>
        </div>

        <Image src={UpDir} alt="icon" />

        <div className="flex items-center gap-2">
          <Image src={Plugs} alt="icon" />
          <p>Connect Wallet</p>
        </div>

        <Image src={DownDir} alt="icon" />

        <div className="flex items-center gap-2">
          <Image src={Guage} alt="icon" />
          <p>Dashboard</p>
        </div>
      </div>
    </div>
  );
};

export default WalletCards;
