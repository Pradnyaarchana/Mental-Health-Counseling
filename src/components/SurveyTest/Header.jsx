/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./SurveyTest.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>MindBliss</div>
      <nav className={styles.navLinks}>
        <div>Home</div>
        <div>Survey Test</div>
        <div>Health & Wellness</div>
        <div>Therapy</div>
        <div>Blogs</div>
      </nav>
      <div className={styles.authButtons}>
        <button className={styles.signIn}>Sign in</button>
        <button className={styles.sos}>SOS</button>
      </div>
    </header>
  );
};

export default Header;
