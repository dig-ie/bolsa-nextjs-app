"use client";
import React from "react";

type ButtonStartProps = {
  title: string;
};

const ButtonStart: React.FC<ButtonStartProps> = ({ title }) => {
  return (
    <button className="border w-80 h-14 rounded-xl">
      <span className="font-bold size-5">{title}</span>
    </button>
  );
};

export default ButtonStart;
