import React from "react";
import logo from "../../assets/logorickandmorty.png";

export default function Header() {
  return (
    <div className="header">
      <div>
        <img src={logo} alt="logo" width="500px" height="300px" />
      </div>

    </div>
  );
}
