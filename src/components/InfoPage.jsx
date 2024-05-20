import React from "react";
import { EventDetails } from "../assets/eventDetails";

export const InfoPage = () => {
  return (
    <div className="p-4 h-[100dhv]">
      {EventDetails.map((event, index) => (
        <div key={index} className="mb-6">
          <h2
            data-aos="fade-up"
            className="text-[2rem] font-bold uppercase mb-2"
          >
            {event.title}
          </h2>
          <div data-aos="fade-up" className="text-sm font-[Garamond] font-bold">
            {event.content}
          </div>
        </div>
      ))}
    </div>
  );
};
