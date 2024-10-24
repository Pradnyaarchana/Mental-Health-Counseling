/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>MindBliss</h1>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li>Home</li>
          <li className={styles.surveyTest}>Survey Test</li>
          <li className={styles.healthWellness}>Health & Wellness</li>
          <li className={styles.therapyNav}>
            <span>Therapy</span>
            <div className={styles.underline} />
          </li>
          <li>Blogs</li>
        </ul>
      </nav>
      <div className={styles.actions}>
        <button className={styles.signIn}>Sign in</button>
        <button className={styles.sos}>SOS</button>
      </div>
    </header>
  );
}

export default Header;
