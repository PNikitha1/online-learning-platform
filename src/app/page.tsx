// pages/index.tsx
'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample featured courses data
  const featuredCourses = [
    { id: 1, title: 'Blockchain Basics', difficulty: 'Beginner' },
    { id: 2, title: 'Advanced Cryptocurrency Trading', difficulty: 'Advanced' },
    { id: 3, title: 'Smart Contracts with Solidity', difficulty: 'Intermediate' },
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="home-container">
      {/* Introduction Section */}
      <section className="intro">
        <h1>Welcome to the Blockchain and Cryptocurrency Learning Platform</h1>
        <p>
          Dive into the future of finance and technology through comprehensive courses on blockchain 
          and cryptocurrency. Whether you're a beginner or an expert, there's something for everyone.
        </p>
      </section>

      {/* Search Bar */}
      <section className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search for courses (e.g., Bitcoin, Ethereum, NFTs)"
        />
      </section>

      {/* Categories/Filters Section */}
      <section className="categories">
        <h2>Filter by Difficulty</h2>
        <ul>
          <li><a href="#">Beginner</a></li>
          <li><a href="#">Intermediate</a></li>
          <li><a href="#">Advanced</a></li>
        </ul>
      </section>

      {/* Featured Courses Section */}
      <section className="featured-courses">
        <h2>Featured Courses</h2>
        <div className="course-list">
          {featuredCourses.map((course) => (
            <div key={course.id} className="course-card">
              <h3>{course.title}</h3>
              <p>Difficulty: {course.difficulty}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <Link href="/components">
        <button className="cta-button">Join Now</button>
        </Link>
        <button className="cta-button">Start Learning</button>
      </section>

      {/* Styles */}
      <style jsx>{`
        .home-container {
          font-family: 'Arial', sans-serif;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          color: #333;
        }
        .intro {
          text-align: center;
          margin: 40px 0;
        }
        .intro h1 {
          font-size: 3rem;
          margin-bottom: 20px;
          color: #0070f3;
        }
        .intro p {
          font-size: 1.2rem;
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto;
        }
        .search-bar {
          text-align: center;
          margin: 30px 0;
        }
        .search-bar input {
          width: 400px;
          padding: 15px;
          font-size: 1rem;
          border: 2px solid #0070f3;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .categories {
          text-align: center;
          margin: 30px 0;
        }
        .categories h2 {
          font-size: 1.8rem;
          color: #0070f3;
          margin-bottom: 20px;
        }
        .categories ul {
          display: flex;
          justify-content: center;
          list-style: none;
          padding: 0;
        }
        .categories ul li {
          margin: 0 15px;
        }
        .categories ul li a {
          font-size: 1.1rem;
          color: #0070f3;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .categories ul li a:hover {
          color: #005bb5;
        }
        .featured-courses {
          margin: 50px 0;
        }
        .featured-courses h2 {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 40px;
        }
        .course-list {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        }
        .course-card {
          width: 30%;
          border: 2px solid #ddd;
          padding: 20px;
          margin: 20px;
          background-color: #f9f9f9;
          border-radius: 10px;
          transition: transform 0.3s ease;
        }
        .course-card:hover {
          transform: scale(1.05);
        }
        .course-card h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }
        .course-card p {
          font-size: 1rem;
          color: #555;
        }
        .cta {
          text-align: center;
          margin: 60px 0;
        }
        .cta-button {
          padding: 15px 30px;
          margin: 10px;
          font-size: 1.2rem;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .cta-button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
