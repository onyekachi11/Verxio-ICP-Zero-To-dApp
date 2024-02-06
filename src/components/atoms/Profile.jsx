"use client";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Hamburger } from ".";
import Button from "../Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Profile = () => {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <div className="my-auto max-w-fit bg-red lg:mt-auto flex gap-4 lg:gap-8 ml-auto items-center md:px-8 text-grey font-light">
      <div className="flex items-center gap-2 relative min-h-fit">
        <span className="h-[7px] w-[7px] rounded-[50%] bg-red-500 absolute top-[6.5px] left-[16.3px]"></span>
        <IoMdNotificationsOutline className="text-[1.6rem] font-semibold" />
        {/* <p className="hidden lg:block text-sm">Notification</p> */}
      </div>

      <Link
        href={"/dashboard/settings"}
        className="flex items-center gap-2 relative cursor-pointer"
      >
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-8 aspect-square object-cover rounded-full border" />
      </Link>
      {pathname == "/dashboard/learn" ? (
        <Button name="Upload" href='/dashboard/upload-lesson' />
      ) : (
        <Button name="Post Now" href="/dashboard/post-task" />
      )}
      <Hamburger />
    </div>
  );
};

export default Profile;
