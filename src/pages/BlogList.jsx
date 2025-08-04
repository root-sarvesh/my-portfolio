// src/pages/BlogList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import blogPosts from '../data/blogPosts';
import '../styles/Blog.css';

export default function BlogList() {
  return (
    <div className="blog__background">
      <div className="blog__container">
        <h1 className="blog__heading">My Blogs</h1>
        <ul className="blog__list">
          {blogPosts.map(post => (
            <li key={post.id} className="blog__list-item">
              <Link to={`/blog/${post.id}`} className="blog__link">
                <h2>{post.title}</h2>
                <p className="blog__date">{post.date}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
