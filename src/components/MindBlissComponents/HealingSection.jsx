

import React, { useState, useEffect } from "react";
import styles from "./HealingSection.module.css";

const HealingSection = () => {
  const [phase, setPhase] = useState("Breathe in");
  const [time, setTime] = useState(4);

  useEffect(() => {
    const phases = ["Breathe in", "Hold", "Breathe out", "Hold"];
    let phaseIndex = 0;
    
    const timer = setInterval(() => {
      setPhase(phases[phaseIndex]);
      phaseIndex = (phaseIndex + 1) % phases.length;
    }, 4000); // Switch phase every 4 seconds

    return () => clearInterval(timer); // Clean up the timer when the component unmounts
  }, []);

  return (
    <section className={styles.healingSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Healing Starts from Within</h2>
          <p className={styles.description}>
            Your mental health is a priority, and there's no shame in putting
            yourself first. Whether you're facing stress, anxiety, or uncertainty, 
            know that you are not alone. Asking for help is a sign of courage.
          </p>
        </div>
         
        {/* Breathing Box */}
        <div className={styles.breatheWidget}>
          <div className={styles.breatheCircle} />
          <p className={styles.breatheText}>{phase}</p>
        </div>
      </div>
      
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/acda358a3279383e77210577a2ad8dc5aa3551dd5a696f68bd8745658c122074"
        alt="Decorative background"
        className={styles.backgroundImage}
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfaba3f3f82351628dbf982b59f2c5145602794b02ff47c012ed1727ff424662"
        alt="Mindfulness illustration"
        className={styles.mindfulnessImage}
      />
    </section>
  );
};

export default HealingSection;
