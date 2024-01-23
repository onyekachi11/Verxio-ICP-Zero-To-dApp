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
  onClick,
  ...props
}) => {
  return href ? (
    <Link
      scroll={scroll}
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
      href={href}
    >
      {name}
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
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
