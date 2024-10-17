"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { Fade } from "react-awesome-reveal";

export const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const navItems = [
    {
      title: "Business Checking",
      options: [
        "High-Yield Business Accounts",
        "Zero-Fee Checking",
        "Business Debit Cards",
      ],
    },
    {
      title: "Solution",
      options: [
        "Merchant Services",
        "Payment Processing Solutions",
        "Payroll Solutions",
      ],
    },
    {
      title: "Resources",
      options: [
        "Business Growth Guides",
        "Market Insights",
        "Legal Compliance Tips",
      ],
    },
    { title: "Results", options: [] },
    {
      title: "Contact",
      options: [
        "Customer Support",
        "Schedule a Consultation",
        "Submit a Request",
      ],
    },
  ];

  const handleOptionSelect = (option: any) => {
    console.log("Selected option:", option);
    setActiveDropdown(null); // Close dropdown after selection
  };

  return (
    <div className="w-full flex justify-between px-5 py-2 relative md:flex-row flex-col">
      {/* image and name.. */}
      <div className="flex items-center justify-around md:flex-row flex-col">
        <Image src={"/images/logo1.png"} alt="logo" height={50} width={80} />
        <p className="font-bold text-lg text-orange-500">nová</p>
      </div>

      {/* the functioning nav buttons.. */}
      <div className="flex gap-7 items-center md:flex-row flex-col">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setActiveDropdown(index)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="flex items-end gap-1 cursor-pointer">
              <p>{item.title}</p>
              {item.options.length > 0 &&
                (activeDropdown === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                ))}
            </div>
            {item.options.length > 0 && activeDropdown === index && (
              <div className="absolute top-full left-0 mt-1 bg-white shadow-md rounded-md overflow-hidden z-10">
                {item.options.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    onClick={() => handleOptionSelect(option)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
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
