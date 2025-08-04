// src/pages/BlogDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogPosts from '../data/blogPosts';
import '../styles/Blog.css';

export default function BlogDetail() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === +id);

  if (!post) {
    return (
      <div className="blog__background">
        <div className="blog__container">
          <p>Post not found.</p>
          <Link to="/blog" className="blog__back">← Back to posts</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog__background">
      <div className="blog__container">
        <Link to="/blog" className="blog__back">← Back to posts</Link>
        <h1 className="blog__post-title">{post.title}</h1>
        <p className="blog__post-date">{post.date}</p>
        <div className="blog__post-content">{post.content}</div>
      </div>
    </div>
  );
}
