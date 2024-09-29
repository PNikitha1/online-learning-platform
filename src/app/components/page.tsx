'use client';
import React, { useState } from 'react';
import CourseCard from './CourseCard';
import Bitcoin from '../public/images/Bitcoin.png';
import Smart from '../public/images/smart contracts.jpg';
import crypto from '../public/images/crpto trading.png';

// Sample Data
const courses = [
  { id: 1, title: 'Blockchain Basics', instructor: 'John Doe', difficulty: 'Beginner', rating: 4.8, thumbnail: Bitcoin, description: 'Learn the fundamentals of blockchain technology.' },
  { id: 2, title: 'Crypto Trading', instructor: 'Jane Smith', difficulty: 'Intermediate', rating: 4.6, thumbnail: crypto, description: 'An intermediate course on trading cryptocurrencies.' },
  { id: 3, title: 'Smart Contracts', instructor: 'Alice Johnson', difficulty: 'Advanced', rating: 4.9, thumbnail: Smart, description: 'Learn to create and manage smart contracts.' },
];

const CourseCatalog: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [sortOption, setSortOption] = useState('Popularity');

  const filteredCourses = courses.filter(course => {
    if (filter === 'All') return true;
    return course.difficulty === filter;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortOption === 'Popularity') return b.rating - a.rating;
    if (sortOption === 'Difficulty') return a.difficulty.localeCompare(b.difficulty);
    return 0;
  });

  return (
    <div className="course-catalog">
      <h1>Course Catalog</h1>

      {/* Filter Section */}
      <div className="filters">
        <label>Filter by Difficulty:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        <label>Sort by:</label>
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="Popularity">Popularity</option>
          <option value="Difficulty">Difficulty</option>
        </select>
      </div>

      {/* Course Listings */}
      <div className="course-list">
        {sortedCourses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>

      <style jsx>{`
        .course-catalog {
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        h1 {
          text-align: center;
          margin-bottom: 20px;
        }

        .filters {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          align-items: center;
        }

        select {
          padding: 5px;
          border-radius: 5px;
          border: 1px solid #ddd;
        }

        .course-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          justify-items: center;
        }
      `}</style>
    </div>
  );
};

export default CourseCatalog;
