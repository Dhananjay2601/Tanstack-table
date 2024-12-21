"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const Landing = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col py-20 gap-5 items-center">
      <h1 className="flex gap-2 text-2xl sm:text-3xl font-bold text-center">
        Hey there Vishal from
        <p className="text-[#7F00FF]">ZYBRA</p>
      </h1>

      <h3 className="text-lg sm:text-lg font-bold text-center ">
        Go to the User Management Table
      </h3>
      <Button onClick={() => router.push("users?page=1")} className="max-w-28">
        Table
      </Button>
    </div>
  );
};

export default Landing;
