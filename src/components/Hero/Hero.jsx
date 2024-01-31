import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi , I am Nandini</h1>
        <p className={styles.description}>
          I am full stack developer, with close to a year of experience in
          creating web applications using Java , Springboot , Mysql and
          Html/CSS, JavaScript and React.js.
        </p>
        <a
          href="mailto:vermanandini818@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero Image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
