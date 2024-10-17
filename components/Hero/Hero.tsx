"use client";
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Fade } from "react-awesome-reveal";

export const Hero = () => {
  return (
    <div className="px-14 mt-10 w-full flex justify-between md:flex-row flex-col">
      <div className="flex relative w-3/4">
        <div className="flex flex-col justify-between pb-5">
          <p className="text-6xl">
            ALL YOUR BUSINESS <br />
            BANKING IN ONE <br />
            PLATFORM
          </p>
          <div className="text-gray-500 max-w-80">
            <p>
              Take your business to new heights with faster cash flow and clear
              financial insights with a free Nova account.
            </p>
            <p>Apply in 10 minutes.</p>
          </div>
          <button className="rounded-full p-2 border-gray-500 border-solid border-[1px] flex gap-3 items-center hover:scale-105 ease-in-out transition-all max-w-40 justify-center">
            <div className="rounded-full bg-orange-600 p-2">
              <Fade direction="up">
                <ArrowUpRight size={20} color="white" />
              </Fade>
            </div>
            <div className="font-semibold">Get Started</div>
          </button>
          <div className="flex gap-1">
            <p className="text-gray-500">Already Started ? </p>
            <p className="text-orange-600"> Finish your application</p>
          </div>
        </div>
        <Image
          src={"/images/p1.png"}
          alt=""
          height={500}
          width={700}
          className="-mt-1 absolute end-0 hidden md:block"
        />
      </div>
      <div className="flex-col gap-5 end-0">
        <Image src={"/images/p2.png"} alt="" height={500} width={350} />
        <div className="flex gap-5 items-center">
          <Fade direction="up">
            <div className="rounded-full bg-orange-600 p-8">
              <ArrowUpRight size={40} color="white" />
            </div>
          </Fade>
          <div className="flex flex-col gap-1 max-w-[200px]">
            <p className="font-semibold">Instant Card Control</p>
            <p className="text-gray-500 text-sm">
              Monitor all your purchases in one place and freeze or unfreeze
              your cards in a few taps
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
