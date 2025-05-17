"use client";
import React from "react";
import { StartButtonProps } from "./StartButton.d";

const StartButton: React.FC<StartButtonProps> = ({ title }) => {
  return (
    <button className="border w-80 h-14 rounded-xl">
      <span className="font-bold size-5">{title}</span>
    </button>
  );
};

export default StartButton;
