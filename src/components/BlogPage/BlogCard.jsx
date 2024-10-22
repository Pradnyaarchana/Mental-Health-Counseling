
// import React from "react";
// import styles from "./BlogPage.module.css";
 
// const BlogCard = ({ title }) => {
//   return (
//     <article className={styles.blogCard}>
//       <div className={styles.blogImage} aria-hidden="true" />
//       <h2 className={styles.blogTitle}>{title}</h2>
//       <div className={styles.blogDivider} />
//       <div className={styles.blogDivider} />
//       <div className={styles.blogDivider} />
//     </article>
//   );
// };

// export default BlogCard;


// import React from "react";
// import { Link } from "react-router-dom";
// import styles from "./BlogPage.module.css";

// const BlogCard = ({ id, title }) => {
//   return (
//     <article className={styles.blogCard}>
//       <Link to={`/blog/${id}`} className={styles.blogLink}>
//         <div className={styles.blogImage} aria-hidden="true" />
//         <h2 className={styles.blogTitle}>{title}</h2>
//       </Link>
//     </article>
//   );
// };

// export default BlogCard;



// BlogCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import styles from "./BlogPage.module.css";

const BlogCard = ({ id, title, imgsrc }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/blog/${id}`); // Navigate to blog detail page with the ID
  };

  return (
    <article className={styles.blogCard} onClick={handleCardClick}>
       <img
        src={imgsrc}
        alt={`Portrait of ${id}`}
        className={styles.blogImage}
      />
      {/* <div className={styles.blogImage} aria-hidden="true" /> */}
      <h2 className={styles.blogTitle}>{title}</h2>
    </article>
  );
};
 
export default BlogCard;
