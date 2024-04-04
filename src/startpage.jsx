import React, { useEffect } from "react";
import Namn from "./assets/Namn.png";

export const Startpage = () => {
  useEffect(() => {
    const parallax = (e) => {
      document.querySelectorAll(".parallax").forEach(function (move) {
        var moving_value = -2;
        var x = (e.clientX * moving_value) / 250;
        var y = (e.clientY * moving_value) / 250;

        move.style.transform =
          "translateX(" + x + "px) translateY(" + y + "px)";
      });
    };

    document.addEventListener("mousemove", parallax);

    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  }, []);

  return (
    <div className="startpage">
      <span className="top-left">16-17 AUGUSTI</span>
      <div className="top-right">
        <a href="https://www.orbyhusslott.se/besk" target="blank" className="">
          ÖRBYHUS SLOTT
        </a>
        <a href="https://www.orbyhusslott.se/besk" target="blank">
          (ORANGERIET)
        </a>
      </div>
      <span className="bottom-left">RSVP</span>
      <span className="bottom-right">Text</span>
      <img src={Namn} className="image parallax floating" />
    </div>
  );
};
