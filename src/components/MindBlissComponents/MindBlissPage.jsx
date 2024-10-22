/**
 * This code was generated by Builder.io.
 */
import React from "react";
import MindBlissHeader from "./MindBlissHeader";
import HealingSection from "./HealingSection";
import styles from "./MindBlissPage.module.css";

const MindBlissPage = () => {
  return (
    <div className={styles.page}>
      <MindBlissHeader />
      <main className={styles.mainContent}>
        <HealingSection />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/acda358a3279383e77210577a2ad8dc5aa3551dd5a696f68bd8745658c122074?placeholderIfAbsent=true&apiKey=0dbd44754ffd40a6baeb24a9377e8a7b"
          alt=""
          className={styles.decorativeImage1}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfaba3f3f82351628dbf982b59f2c5145602794b02ff47c012ed1727ff424662?placeholderIfAbsent=true&apiKey=0dbd44754ffd40a6baeb24a9377e8a7b"
          alt=""
          className={styles.decorativeImage2}
        />
      </main>
    </div>
  );
};

export default MindBlissPage;
