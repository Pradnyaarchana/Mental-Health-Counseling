import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TherapistCard.module.css";

function TherapistCard({
  name,
  qualification,
  role,
  languages,
  availability,
  experience,
  location,
  imageSrc,
}) {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate("/book-appointment", {
      state: {
        name,
        qualification,
        role,
        languages,
        availability,
        experience,
        location,
        imageSrc,
      },
    });
  };

  return (
    <article className={styles.therapistCard}>
      <img
        src={imageSrc}
        alt={`Portrait of ${name}`}
        className={styles.therapistImage}
      />
      <div className={styles.therapistInfo}>
        <h2 className={styles.therapistName}>{name}</h2>
        <p className={styles.therapistQualification}>{qualification}</p>
        <p className={styles.therapistRole}>{role}</p>
        <p className={styles.therapistLanguages}>
          <strong>Languages:</strong> {languages}
        </p>
        <p className={styles.therapistAvailability}>
          <strong>Availability:</strong> {availability}
        </p>
        <p className={styles.therapistExperience}>
          <strong>Experience:</strong> {experience}
        </p>
        {location && (
          <p className={styles.therapistLocation}>
            <strong>Location:</strong> {location}
          </p>
        )}
        <button className={styles.bookAppointment} onClick={handleBookAppointment}>
          Book an Appointment
        </button>
      </div>
    </article>
  );
}

export default TherapistCard;
