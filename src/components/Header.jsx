"use client";
import { useSelector } from "react-redux";
import { Logo, Profile, Search } from "./atoms";

const Header = () => {
  const userProfile = useSelector(
    (state) => state.persistedReducer.user.userProfile
  );

  return (
    <>
      {userProfile && Object.keys(userProfile).length !== 0 && (
        <section className="px-[4%] w-full font-body shadow-dashboard-header h-fit sticky top-0 left-0  py-[19px] gap-4 flex items-center justify-between shadow-header bg-primary_white border-[#D2D2D2] bg-[#FFFFFF] z-20">
          <Logo className="lg:hidden" />
          {/* <Search /> */}
          <Profile />
        </section>
      )}
    </>
  );
};

export default Header;
