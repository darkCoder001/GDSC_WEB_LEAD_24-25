"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Fade } from "react-awesome-reveal";

export const Header = () => {
  return (
    <div className="w-full flex justify-between px-5 py-2">
      {/* image and name.. */}
      <div className="flex items-center justify-around">
        <Image src={"/images/logo1.png"} alt="logo" height={50} width={80} />
        <p className="font-bold text-lg text-orange-500">nová</p>
      </div>

      {/* the functioning nav buttons.. */}
      <div className="flex gap-7 items-center">
        <div className="flex items-end gap-1">
          <p>Business Checking</p>
          <ChevronDown size={20} />
        </div>
        <div className="flex items-end gap-1">
          <p>Solution</p>
          <ChevronDown size={20} />
        </div>
        <div className="flex items-end gap-1">
          <p>Resources</p>
          <ChevronDown size={20} />
        </div>
        <div className="    ">
          <p>Results</p>
        </div>
        <div className="flex items-end gap-1">
          <p>Contact</p>
          <ChevronDown size={20} />
        </div>
      </div>

      {/* login and get started button */}
      <div className="flex gap-7 justify-center items-center">
        <button className="hover:scale-110 hover:ease-in-out transition-all">
          Log In
        </button>
        <button className="rounded-full p-2 border-gray-500 border-solid border-[1px] flex gap-3 items-center hover:scale-105 ease-in-out transition-all">
          <div className="rounded-full bg-orange-600 p-2">
            <Fade direction="up">
              <ArrowUpRight size={20} color="white" />
            </Fade>
          </div>
          <div>Get Started</div>
        </button>
      </div>
    </div>
  );
};
