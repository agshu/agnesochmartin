import React from "react";
import { Logo } from "./Logo";
import Banner from "./Banner";

export const Startpage = () => {
  return (
    <div className="flex flex-col h-[100vh] overflow-hidden">
      <Banner />
      <Logo />
    </div>
  );
};
