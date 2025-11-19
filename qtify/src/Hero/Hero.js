import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img
          src={require("../assests/vibrating-headphone 1.png")}
          width={212}
          alt="headphones"
        ></img>
      </div>
    </div>
  );
}

export default Hero;
