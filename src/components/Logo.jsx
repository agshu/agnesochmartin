import react, { useRef, useEffect } from "react";
import Namn from "../assets/Namn.png";

export const Logo = () => {
  const ref = useRef(null);
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
    <div ref={ref} className="animation">
      <div className="logo">
        <img
          src={Namn}
          alt="Agnes & Martin"
          className="image parallax floating"
        />
      </div>
    </div>
  );
};
