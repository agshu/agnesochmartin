import React from "react";
import { ScheduleDetails } from "../assets/scheduleDetails";
import martin from "../assets/martin.png";

const Schedule = ({ entries }) => {
  return (
    <div className="relative flex flex-col gap-4">
      {/* <img
        src={martin}
        alt="Martin"
        className="w-[500px] h-[500px] absolute top-10 right-0 z-[-1]"
      /> */}
      {entries.map((entry, index) => (
        <div key={index}>
          <h3 data-aos="fade-up" className="text-[3rem] uppercase">
            {entry.day}
          </h3>
          <div
            data-aos="fade-up"
            className="grid grid-cols-[100px_auto] lg:grid-cols-[100px_auto] font-[Garamond] border-[0.5px] border-green text-xs lg:text-sm"
          >
            <div className="uppercase font-bold border-[0.5px] border-green px-2 py-1 text-sm">
              När
            </div>
            <div className="uppercase font-bold border-[0.5px] border-green px-2 py-1 text-sm">
              Vad
            </div>
            {entry.activities.map((activity, idx) => (
              <React.Fragment key={idx}>
                <div className="border-[0.5px] border-green px-2 py-1 text-sm">
                  {activity.time}
                </div>
                <div
                  className="border-[0.5px] border-green px-2 py-1 [&>a]:underline [&>a]:underline-offset-2 text-sm"
                  dangerouslySetInnerHTML={{ __html: activity.description }}
                ></div>
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Schedule;

export const SchedulePage = () => {
  return (
    <div className="px-2 font-bold w-[100dvw] lg:w-[70dvw]">
      <Schedule entries={ScheduleDetails} />
    </div>
  );
};
