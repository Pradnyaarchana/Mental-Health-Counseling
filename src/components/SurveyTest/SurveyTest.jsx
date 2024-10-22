import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import SurveyQuestion from "./SurveyQuestion";
import styles from "./SurveyTest.module.css";

const SurveyTest = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate(); // Hook to navigate between pages

  const questions = [
    {
      question: "How are you feeling right now?",
      options: [
        "I'm feeling okay.",
        "I'm a little stressed or anxious.",
        "I'm feeling very stressed or overwhelmed.",
        "I'm feeling hopeless or deeply sad.",
        "I'm having thoughts of self-harm.",
      ],
      type: "radio",
      name: "feeling",
    },
    {
      question: "How comfortable are you with reaching out for help?",
      options: [
        "Very comfortable.",
        "Somewhat comfortable.",
        "I'm not sure.",
        "Not comfortable.",
      ],
      type: "radio",
      name: "comfort",
    },
    {
      question:
        "What kind of support are you looking for? (Select one or more)",
      options: [
        "Professional counseling.",
        "Self-help resources (articles, exercises).",
        "Group therapy or support groups.",
        "Crisis intervention (I need immediate help)",
      ],
      type: "checkbox",
      name: "support",
    },
    {
      question:
        "Have you experienced any of the following in the past two weeks? (Select all that apply)",
      options: [
        "Trouble sleeping or eating.",
        "Feeling down or depressed.",
        "Anxiety or excessive worry.",
        "Thoughts of self-harm or suicide.",
        "None of the above.",
      ],
      type: "checkbox",
      name: "symptoms",
    },
    {
      question: "Do you need urgent help right now?",
      options: ["Yes.", "No.", "Not sure."],
      type: "radio",
      name: "urgent_help",
    },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => {
      if (type === "checkbox") {
        const newValue = prev[name] || [];
        if (checked) {
          return { ...prev, [name]: [...newValue, value] };
        } else {
          return {
            ...prev,
            [name]: newValue.filter((val) => val !== value),
          };
        }
      } else {
        return { ...prev, [name]: value };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted: ", formData);

    // Simulate form submission logic
    alert("Survey submitted!");

    // Redirect to home page after submission
    navigate("/");
  };

  return (
    <main className={styles.surveyTest}>
      <form className={styles.surveyContainer} onSubmit={handleSubmit}>
        {questions.map((q, index) => (
          <SurveyQuestion
            key={index}
            question={q.question}
            options={q.options}
            type={q.type}
            name={q.name}
            onChange={handleChange}
          />
        ))}
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </main>
  );
};

export default SurveyTest;
