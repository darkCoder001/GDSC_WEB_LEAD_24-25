"use client";
import React, { useState } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import bankingFeatures from "../../utils/bankingFeatures.json";

export const Benefits: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState<keyof typeof bankingFeatures>("Benefits");

  return (
    <div className="md:w-3/5 w-full">
      <div className="flex mb-4 bg-gray-100 p-1 rounded-full justify-between md:flex-row flex-col">
        {(
          Object.keys(bankingFeatures) as Array<keyof typeof bankingFeatures>
        ).map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              activeCategory === category
                ? "bg-orange-500 text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="bg-white rounded-3xl px-10 py-8 flex flex-col gap-6">
        {bankingFeatures[activeCategory].map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex justify-between items-center">
              <p
                className={`${
                  item.expanded
                    ? "text-2xl font-semibold text-orange-500"
                    : "text-gray-800 font-medium"
                }`}
              >
                {item.title}
              </p>
              {item.expanded ? (
                <ArrowUpRight size={24} color="#f97316" strokeWidth={2} />
              ) : (
                <ArrowDownRight size={20} color="#666666" strokeWidth={2} />
              )}
            </div>
            {item.expanded && (
              <div className="w-2/3 text-gray-600 text-sm">
                <p>{item.description}</p>
              </div>
            )}
            {index < bankingFeatures[activeCategory].length - 1 && (
              <hr className="border-gray-200" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
