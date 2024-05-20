import React from "react";
import { EventDetails } from "../assets/eventDetails";

export const InfoPage = () => {
  return (
    <div className="p-2 lg:p-0 h-[120dvh] lg:h-[110dvh] w-[100dvw] lg:w-[70dvw]">
      <h2 className="text-[3rem] font-bold uppercase mb-2">Detaljer</h2>
      {EventDetails.map((event, index) => (
        <div
          key={index}
          className="py-6 border border-0 border-t-2 border-green lg:grid lg:grid-cols-2 lg:gap-4 lg:items-center "
        >
          <h2
            data-aos="fade-up"
            className="text-xs lg:text-sm font-bold uppercase mb-2"
          >
            {event.title}
          </h2>
          <div
            data-aos="fade-up"
            className="text-xs lg:text-sm font-[Garamond] font-bold"
          >
            {event.content}
          </div>
        </div>
      ))}
    </div>
  );
};
