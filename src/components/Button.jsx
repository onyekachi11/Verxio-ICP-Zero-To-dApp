import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";



const Button = ({
  href,
  small,
  large,
  className,
  scroll = true,
  outline,
  name,
  ...props
}) => {
  return href ? (
    <Link
      scroll={scroll}
      className={twMerge(
        `${
          outline
            ? "bg-[transparent] text-[#00ADEF] border border-[#00ADEF]"
            : "bg-primary text-[#FCFCFC]"
        } rounded-[8px] transition-all duration-500 ${
          !props.disabled ? "hover:scale-[1.02] active:scale-[0.95]" : ""
        }  min-w-fit flex justify-center items-center place-items-center gap-4 py-3 px-5 
        // ${large ? "md:text-xl" : small ? "" : "text-lg"} 
        font-body`,
        className
      )}
      href={href}
    >
      {props.children}
    </Link>
  ) : (
    <button
      {...props}
      className={twMerge(
        `${
          outline
            ? "bg-[transparent] text-[#00ADEF] border border-[#00ADEF]"
            : "bg-[#00ADEF] text-[#FCFCFC]"
        } rounded-[8px] transition-all leading-none duration-500 text-[14px] font-medium ${
          !props.disabled ? "hover:scale-[1.02] active:scale-[0.95]" : ""
        }  min-w-fit
      flex items-center place-items-center justify-center gap-4 px-[18px] py-2`,
        className
      )}
    >
      {name}
    </button>
  );
};

export default Button;
