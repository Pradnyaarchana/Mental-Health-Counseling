/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/49b818871fa5f0f352aecfca6e54b1509c1ec25da0feb3c717b35a2529cc91f9?placeholderIfAbsent=true&apiKey=0dbd44754ffd40a6baeb24a9377e8a7b"
          alt="Meditation app logo"
          className={styles.footerLogo}
        />
        <div className={styles.footerInfo}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/26fbc634dafaba2954d738d29d553877c13cf43fbc000f4a1b110f99298ac7b7?placeholderIfAbsent=true&apiKey=0dbd44754ffd40a6baeb24a9377e8a7b"
            alt="App store badges"
            className={styles.appStoreBadges}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1765409b310a3e75b8a8dbdd1affbb2e376306e67826cd00fcd173de425e45ce?placeholderIfAbsent=true&apiKey=0dbd44754ffd40a6baeb24a9377e8a7b"
            alt="Social media icons"
            className={styles.socialIcons}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
