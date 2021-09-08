import React from "react";
import logofooter from "../../assets/logorickandmorty.png";
import "../Footer/style.css";

export default function Footer() {
  return (
    <footer>
      <figure>
        <img src={logofooter} alt="logo" />
      </figure>
      <ul class="socialmidia">
        <a href="https://www.instagram.com/sam_diogo/">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/samuel-oliveira-diogo/">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/Sammynauta">
          <i class="fab fa-github"></i>
        </a>
      </ul>
    </footer>
  );
}
