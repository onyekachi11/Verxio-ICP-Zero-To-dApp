"use client";
import Button from "../components/Button";
import { useRouter } from "next/navigation";
import React from "react";

const Error = ({reset}) => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
    reset();
  };
  return (
    <section className="w-full min-h-full grid place-content-center place-items-center gap-4">
      <h1 className="text-xl font-bold">
        An unexpected error has occured!!! in main
      </h1>
      <p>We are working to fix this.</p>
      <div className="flex gap-4 items-center mt-6">
        <Button outline onClick={reset} name='Try Again'/>
        <Button onClick={handleGoBack} name='Go back'/>
      </div>
    </section>
  );
};

export default Error;
