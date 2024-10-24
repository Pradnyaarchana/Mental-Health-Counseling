/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Header from "../Header/Header";
import EmergencyHelpline from "../EmergencyHelpline/EmergencyHelpline";
import Lifeline from "../Lifeline/Lifeline";
import styles from "./SOSPage.module.css";

function SOSPage() {
  return (
    <div className={styles.sosPage}>
      {/* <Header /> */}
      <section className={styles.emergencySection}>
      <h2 className={styles.title}>Emergency Helpline Numbers</h2>

      <div className={styles.helplineContainer}>
        
        <div className={styles.helpdiv}>
          <div className={styles.helplineName}>
            National Mental Health Helpline -
          </div>

          <div className={styles.helplineNumber}>1800-599-0019</div>
        </div>

        <div className={styles.helpdiv}>
        <div className={styles.helplineName}>
        Suicide Prevention Helplines -
        </div>

        <div className={styles.helplineNumber}>022-2772 6771</div>
        </div>
        

      </div>

      
    </section>
     
     


    <section className={styles.lifelineSection}>
      <h2 className={styles.titlelife}>The Lifeline</h2>
      <p className={styles.description}>
        Call or text 24/7 for a free, confidential conversation with a trained
        counselor.
        <br />
        <span className={styles.phoneNumber}>Call or text 988</span>
      </p>
    </section>     
    </div>
  );
}

export default SOSPage;
