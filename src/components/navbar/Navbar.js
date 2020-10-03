import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowNavbar(true);
      } else setShowNavbar(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${showNavbar && "nav_black"}`}>
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png"
        alt="logo"
      />
      <img
        className="profile"
        src="https://ih1.redbubble.net/image.618427315.3222/flat,128x128,075,t.u3.jpg"
        alt="profile"
      />
    </div>
  );
}

export default Navbar;
