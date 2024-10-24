/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./AppointmentDate.module.css";

function AppointmentDate() {
  return (
    <section className={styles.appointmentDate}>
      <h3 className={styles.title}>Date of Appointment:</h3>
      <div className={styles.dateInput}>
        <input
          type="text"
          placeholder="DD/MM/YYYY"
          className={styles.dateField}
          aria-label="Select date of appointment"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dec20e4d8ad70dcec0fb2522f6cb2cd5db2b2babd355c5ef8ebef0cd0aeea344?placeholderIfAbsent=true&apiKey=0dbd44754ffd40a6baeb24a9377e8a7b"
          alt="Calendar icon"
          className={styles.calendarIcon}
        />
      </div>
    </section>
  );
}

export default AppointmentDate;
