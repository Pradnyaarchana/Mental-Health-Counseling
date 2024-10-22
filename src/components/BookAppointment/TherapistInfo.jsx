/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./TherapistInfo.module.css";

function TherapistInfo() {
  return (
    <section className={styles.therapistInfo}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a749982a0338dd18b128b3530df1c218378f9536189088d03a76ecbd5beedf5?placeholderIfAbsent=true&apiKey=0dbd44754ffd40a6baeb24a9377e8a7b"
        alt="Therapist profile picture"
        className={styles.therapistImage}
      />
      <div className={styles.therapistDetails}>
        <h2 className={styles.name}>Dr. [Therapist Name]</h2>
        <p className={styles.education}>Ph.D. in Clinical Psychology</p>
        <p className={styles.position}>Lead Therapist at [Clinic Name]</p>
        <p className={styles.languages}>Languages: English, Hindi, Marathi</p>
        <p className={styles.availability}>Availability: Offline/Online</p>
        <p className={styles.experience}>Experience: 10+ years</p>
        <p className={styles.location}>
          Location: 44, Sankalpa apartment, Sinhagad road, Pune
        </p>
      </div>
    </section>
  );
}

export default TherapistInfo;
