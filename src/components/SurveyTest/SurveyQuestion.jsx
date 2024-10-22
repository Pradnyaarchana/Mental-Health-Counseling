import React from "react";
import styles from "./SurveyTest.module.css";

const SurveyQuestion = ({ question, options, type, name }) => {
  return (
    <section className={styles.questionContainer}>
      <h2 className={styles.questionText}>{question}</h2>
      <div
        className={
          type === "checkbox"
            ? styles.checkboxContainer
            : styles.optionsContainer
        }
      >
        {options.map((option, index) => (
          <label key={index} className={styles.optionText}>
            <input
              type={type}
              name={name}
              value={option}
              className={styles.inputOption}
              required={type === "radio"} // Apply required only for radio buttons
            />
            {option}
          </label>
        ))}
      </div>
    </section>
  );
};

export default SurveyQuestion;
