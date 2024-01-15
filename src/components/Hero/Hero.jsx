import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Abinash Bhakat</h1>
        <p className={styles.description}>
          I'm a frontend developer . I have experience using React and javascript
          . Reach out if you'd like to know more about me!
        </p>
        <a href="mailto:abinashbhakat50@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        // src={getImageUrl("hero/heroImage.png")}
        src="../../../public/20220214_111612.jpg"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
