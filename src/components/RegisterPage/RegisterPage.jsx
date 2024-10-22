// /**
//  * This code was generated by Builder.io.
//  */
// import React from "react";
// import Header from "./Header";
// import RegistrationForm from "./RegistrationForm";
// import styles from "./RegisterPage.module.css";

// function RegisterPage() {
//   return (
//     <main className={styles.registerPage}>
//       <Header />
//       <RegistrationForm />
//     </main>
//   );
// }

// export default RegisterPage;



import React, { useState } from "react";
import styles from "./RegisterPage.module.css";

function RegisterPage() {
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
            href="/login"
            className={`${styles.navLink} ${styles.registerLink}`}
          >
            Register
          </a>
        </nav>
      </header>
      <main>
        <form className={styles.loginForm}>
          <h2 className={styles.formTitle}>CREATE YOUR ACCOUNT</h2>

          <input
            id="name"
            type="text"
            className={styles.inputField}
            placeholder="Your Name"
          />

          <input
            id="email"
            type="email"
            className={styles.inputField}
            placeholder="Email"
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
export default RegisterPage;
