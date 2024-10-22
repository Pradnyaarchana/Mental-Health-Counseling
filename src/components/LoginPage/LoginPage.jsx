import React, { useState } from "react";
import styles from "./LoginPage.module.css";

function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className={styles.loginPage}>
      <header className={styles.header}>
        <h1 className={styles.logo}>MindBliss</h1>
        <nav className={styles.navContainer}>
          <a href="/" className={`${styles.navLink} ${styles.homeLink}`}>
            Back to home
          </a>
          <a
            href="/register"
            className={`${styles.navLink} ${styles.registerLink}`}
          >
            Register
          </a>
        </nav>
      </header>
      <main>
        <form className={styles.loginForm}>
          <h2 className={styles.formTitle}>LOGIN</h2>

          <input
            id="username"
            type="text"
            className={styles.inputField}
            placeholder="Username"
          />
          {/* <div className={styles.inputUnderline} /> */}

          <div className={styles.passwordContainer}>
            <input
              id="password"
              type={passwordVisible ? "text" : "password"}
              className={styles.inputField}
              placeholder="Password"
            />
            <button
              type="button"
              className={styles.showPassword}
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? "Hide" : "Show"}
            </button>
          </div>
          {/* <div className={styles.inputUnderline} /> */}
          
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </form>
      </main>
    </div>
  );
}

export default LoginPage;
