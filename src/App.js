import React from "react";
import { Element } from "react-scroll";
import "./index.css";
import { Startpage } from "./components/Startpage";
import { SchedulePage } from "./components/Schedule";
import { RSVP } from "./components/RSVP";
import { InfoPage } from "./components/InfoPage";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Element name="startpage">
        <Startpage />
      </Element>
      <Element name="schedule">
        <SchedulePage />
      </Element>
      <Element name="info">
        <InfoPage />
      </Element>
      <Element name="rsvp">
        <RSVP />
      </Element>
      <div className="text-[3rem] uppercase py-10 font-bold">Puss & kram!</div>
    </div>
  );
}

export default App;
