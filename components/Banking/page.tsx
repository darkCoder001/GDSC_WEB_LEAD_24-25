import React from "react";
import { OB } from "./OB";
import { Benefits } from "./Benefits";

export const Banking = () => {
  return (
    <div className="mt-24 px-14 flex gap-10 justify-center md:flex-row flex-col">
      <OB />
      <Benefits />
    </div>
  );
};
