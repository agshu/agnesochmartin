import React from "react";
import { Element } from "react-scroll";
import "./index.css";
import { Startpage } from "./components/Startpage";
import { SchedulePage } from "./components/Schedule";
import { RSVP } from "./components/RSVP";
import { InfoPage } from "./components/InfoPage";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
