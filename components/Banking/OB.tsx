import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export const OB = () => {
  return (
    <div className="md:w-1/3 bg-white rounded-3xl px-10 py-5 flex flex-col gap-7 items-center w-full">
      <div className="flex justify-between z-10">
        <p className="w-2/3 text-3xl">
          ONLINE BANKING THAT TAKES YOUR BUSINESS TO THE{" "}
          <span className="text-orange-600">NEXT LEVEL</span>{" "}
        </p>
        <ArrowUpRight size={40} color="#222222" strokeWidth={1} />
      </div>
      <div className="flex">
        <p className="text-gray-500 w-2/4 text-sm z-10">
          Monitor all your purchases in one place and freeze or unfreeze your
          card in a few taps
        </p>
        <Image
          src={
            "https://images.pexels.com/photos/3831569/pexels-photo-3831569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt=""
          width={250}
          height={250}
          className="rounded-2xl -mt-20 hidden md:block"
        />
      </div>
    </div>
  );
};
