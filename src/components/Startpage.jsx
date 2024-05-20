import React, { useRef } from "react";
import { Logo } from "./Logo";
import Banner from "./Banner";

export const Startpage = () => {
  return (
    <div className="flex flex-col h-[100vh] overflow-hidden">
      <Banner />
      {/* <div className="h-[60px] w-full bg-pink z-10 fixed top-0 bottom-0 border border-0 border-dashed border-b-2 border-[#325c3e]">
        <span className="text-base fixed top-1 left-1 lg:top-4 lg:left-4 lg:text-lg">
          16-17 AUGUSTI
        </span>
        <div className="flex flex-col text-right text-base fixed top-1 right-1 lg:top-4 lg:right-4 lg:text-lg">
          <a href="https://www.orbyhusslott.se/besk" target="blank">
            ÖRBYHUS SLOTT
          </a>
          <a href="https://www.orbyhusslott.se/besk" target="blank">
            (ORANGERIET)
          </a>
        </div>
      </div> */}
      {/* <div className="fixed w-full h-[60px] bg-pink z-10 bottom-0 border border-0 border-t-2 border-dashed border-[#325c3e]">
        <span className="text-base lg:text-lg fixed bottom-1 left-1 lg:bottom-4 lg:left-4">
          OSA
        </span>
        <span className="text-base lg:text-lg fixed bottom-1 right-1 lg:bottom-4 lg:right-4">
          SCHEMA
        </span>
      </div> */}
      <Logo />
    </div>
  );
};
