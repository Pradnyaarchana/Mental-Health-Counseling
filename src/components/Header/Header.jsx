import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import styles from "./Header.module.css";

const navItems = [
  "Home",
  "Survey Test",
  "Health & Wellness",
  "Therapy",
  "Blogs",
];

const navcomp = [
  "/",
  "/survey-test",
  "/health-and-wellness",
  "/therapy",
  "/blog",
];

function Header() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>MindBliss</h1>
      <nav className={styles.nav}>
        {navItems.map((item, index) => (
          <a
            key={index}
            href={'http://localhost:3000' + navcomp[index]}
            className={`${styles.navItem} ${styles['navItem-grow-up']}`}
          >
            {item}
          </a>
        ))}
      </nav>
      <div className={styles.buttonGroup}>
        {/* Use button and navigate on click */}
        <button
          className={styles.signInButton}
          onClick={() => navigate("/login")}
        >
          Sign in
        </button>
        <button
          className={styles.sosButton}
          onClick={() => navigate("/sos")}
        >
          SOS
        </button>
      </div>
    </header>
  );
}

export default Header;
