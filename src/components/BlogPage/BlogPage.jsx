
// import React from "react";
// import styles from "./BlogPage.module.css";
// import BlogCard from "./BlogCard";

// const BlogPage = () => {
//   const blogData = [
//     { id: 1, title: "Breaking the Stigma: Why Mental Health Matters" },
//     { id: 2, title: "Signs You Might Need Counseling: When to Seek Help" },
//     { id: 3, title: "Self-Care Strategies for Mental Wellness" },
//     { id: 4, title: "Understanding Anxiety" },
//     { id: 5, title: "How Therapy Works" },
//     { id: 6, title: "The Power of Talking: How Counseling Heals" },
//     { id: 7, title: "Mental Health Tips for Managing Stress in Daily Life" },
//     { id: 8, title: "Overcoming Depression: Steps Towards Healing" },
//   ];

//   return (
//     <div className={styles.blogPage}>
      
//       <input
//         type="search"
//         className={styles.searchBar}
//         placeholder="Search"
//         aria-label="Search blogs"
//       />
//       <main className={styles.blogGrid}>
//         <div className={styles.blogRow}>
//           {blogData.map((blog, index) => (
//             <div key={blog.id} className={styles.blogColumn}>
//               <BlogCard title={blog.title} />
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default BlogPage;

// import React from "react";
// import styles from "./BlogPage.module.css";
// import BlogCard from "./BlogCard";


// const BlogPage = () => {
//   const blogData = [
//     { id: 1, title: "Breaking the Stigma: Why Mental Health Matters" },
//     { id: 2, title: "Signs You Might Need Counseling: When to Seek Help" },
//     { id: 3, title: "Self-Care Strategies for Mental Wellness" },
//     { id: 4, title: "Understanding Anxiety" },
//     { id: 5, title: "How Therapy Works" },
//     { id: 6, title: "The Power of Talking: How Counseling Heals" },
//     { id: 7, title: "Mental Health Tips for Managing Stress in Daily Life" },
//     { id: 8, title: "Overcoming Depression: Steps Towards Healing" },
//   ];

//   return (
//     <div className={styles.blogPage}>
//       <input
//         type="search"
//         className={styles.searchBar}
//         placeholder="Search"
//         aria-label="Search blogs"
//       />
//       <div className={styles.blogGrid}>
//         {blogData.map((blog) => (
//           <BlogCard key={blog.id} title={blog.title} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogPage;

import React from "react";
import styles from "./BlogPage.module.css";
import BlogCard from "./BlogCard";

import oneImage from './images/one.jpg';
import twoImage from './images/two.jpg';
import threeImage from './images/three.jpg';
import fourImage from './images/four.jpg';
import fiveImage from './images/five.jpg';
import sixImage from './images/six.jpg';
import sevenImage from './images/seven.png';
import eightImage from './images/eight.jpg';

const BlogPage = () => {
  const blogData = [
    { id: 1, title: "Breaking the Stigma: Why Mental Health Matters", imgsrc:oneImage },
    { id: 2, title: "Signs You Might Need Counseling: When to Seek Help" , imgsrc:twoImage},
    { id: 3, title: "Self-Care Strategies for Mental Wellness", imgsrc: threeImage },
    { id: 4, title: "Understanding Anxiety", imgsrc: fourImage },
    { id: 5, title: "How Therapy Works", imgsrc: fiveImage },
    { id: 6, title: "The Power of Talking: How Counseling Heals", imgsrc: sixImage },
    { id: 7, title: "Mental Health Tips for Managing Stress in Daily Life" , imgsrc: sevenImage},
    { id: 8, title: "Overcoming Depression: Steps Towards Healing" , imgsrc:eightImage},
  ];

  return (
    <div className={styles.blogPage}>
      <input
        type="search"
        className={styles.searchBar}
        placeholder="Search"
        aria-label="Search blogs"
      />
      <div className={styles.blogGrid}>
        {blogData.map((blog) => (
          <BlogCard key={blog.id} id={blog.id} title={blog.title} imgsrc={blog.imgsrc} />

        ))}
      </div>
    </div>
  );
};

export default BlogPage;
