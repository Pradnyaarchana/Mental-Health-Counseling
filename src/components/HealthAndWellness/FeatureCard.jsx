import React from "react";
import { Link } from "react-router-dom"; // Import Link for internal routing
import styles from "./HealthAndWellness.module.css";

const FeatureCard = ({ imageUrl, titleUrl, iconUrl, linkTo }) => {
  return (
    <Link to={linkTo} className={styles.featureCardLink}>
      <div className={styles.featureCard}>
        <div className={styles.featureContent}>
          <div className={styles.featureImageColumn}>
            <img
              loading="lazy"
              src={imageUrl}
              alt=""
              className={styles.featureImage}
            />
          </div>
          <div className={styles.featureTextColumn}>
            <div className={styles.featureTextWrapper}>
              {titleUrl}
            </div>
            <img
              loading="lazy"
              src="/next.png"
              alt=""
              className={styles.featureIcon}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeatureCard;
