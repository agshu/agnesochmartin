import React from "react";
import { ScheduleDetails } from "../assets/scheduleDetails";

const Schedule = ({ entries }) => {
  return (
    <div className="flex flex-col gap-4 h-[100dvh]">
      {entries.map((entry, index) => (
        <div key={index}>
          <h3 data-aos="fade-up" className="text-[3rem] uppercase">
            {entry.day}
          </h3>
          <div
            data-aos="fade-up"
            className="grid grid-cols-[auto_auto] font-[Garamond] border-[0.5px] border-green"
          >
            <div className="uppercase font-bold border-[0.5px] border-green px-2 py-1">
              När
            </div>
            <div className="uppercase font-bold border-[0.5px] border-green px-2 py-1">
              Vad
            </div>
            {entry.activities.map((activity, idx) => (
              <React.Fragment key={idx}>
                <div className="border-[0.5px] border-green px-2 py-1">
                  {activity.time}
                </div>
                <div
                  className="border-[0.5px] border-green px-2 py-1 [&>a]:underline [&>a]:underline-offset-2"
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
    <div className="px-2 font-bold">
      <Schedule entries={ScheduleDetails} />
    </div>
  );
};
