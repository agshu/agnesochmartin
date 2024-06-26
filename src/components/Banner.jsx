import React from "react";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <div className="w-full bg-green uppercase text-base text-pink fixed top-0 left-0 p-1 overflow-hidden whitespace-nowrap z-100 border-green border-0 cursor-pointer">
      <Link
        to="rsvp"
        smooth={true}
        duration={500}
        offset={-50}
        className="flex animate-marquee"
      >
        <div className="flex">
          <span className="mr-4">OSA senast 6 juni!</span>
          <span className="mr-4">OSA senast 6 juni!</span>
          <span className="mr-4">OSA senast 6 juni!</span>
          <span className="mr-4">OSA senast 6 juni!</span>
          <span className="mr-4">OSA senast 6 juni!</span>
          <span className="mr-4">OSA senast 6 juni!</span>
          <span className="mr-4">OSA senast 6 juni!</span>
          <span className="mr-4">OSA senast 6 juni!</span>
        </div>
        <div className="flex">
          <span className="mr-4">OSA senast 6 juni!</span>
          <span className="mr-4">OSA senast 6 juni!</span>
          <span className="mr-4">OSA senast 6 juni!</span>
          <span className="mr-4">OSA senast 6 juni!</span>
          <span className="mr-4">OSA senast 6 juni!</span>
          <span className="mr-4">OSA senast 6 juni!</span>
          <span className="mr-4">OSA senast 6 juni!</span>
          <span className="mr-4">OSA senast 6 juni!</span>
        </div>
      </Link>
    </div>
  );
};

export default Banner;
