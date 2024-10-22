import React from "react";
import { useParams } from "react-router-dom";

const BlogPostPage = () => {
  const { id } = useParams();  // Extract the id from the URL
  const blogData = [
    { id: 1, title: "Breaking the Stigma: Why Mental Health Matters", content: "Full content of the blog post here..." },
    { id: 2, title: "Signs You Might Need Counseling: When to Seek Help", content: "Full content of the blog post here..." },
    { id: 3, title: "Self-Care Strategies for Mental Wellness", content: "Full content of the blog post here..." },
    // Add the full content of each blog here
  ];

  // Find the blog post by id
  const blogPost = blogData.find(blog => blog.id === parseInt(id));

  if (!blogPost) {
    return <p>Blog not found!</p>;
  }

  return (
    <div>
      <h1>{blogPost.title}</h1>
      <p>{blogPost.content}</p>
    </div>
  );
};

export default BlogPostPage;
