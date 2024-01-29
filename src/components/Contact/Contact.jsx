import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:vermanandini818@gmail.com">
            vermanandini818@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/nandini-verma-586235214/">
            linkedin.com/nandini
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/nandiniverma08?tab=repositories">
            github.com/nandiniverma08
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/twitterIcon.png")}
            alt="Twitter icon"
          />
          <a href="https://twitter.com/nandiniColdSide">
            twitter.com/@nandiniColdSide
          </a>
        </li>
      </ul>
    </footer>
  );
};
