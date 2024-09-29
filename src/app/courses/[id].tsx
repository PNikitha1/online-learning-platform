'use client';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

const CourseDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // Simulating fetching course data based on course id
  const course = {
    id,
    title: 'Blockchain Basics',
    description: 'Learn the fundamentals of blockchain technology, its applications, and implications.',
    objectives: 'Understand blockchain, decentralization, and consensus algorithms.',
    outcomes: 'Be able to explain blockchain concepts and create simple blockchain applications.',
    instructor: 'John Doe',
    duration: '10 hours',
    syllabus: 'Introduction, Blockchain Basics, Smart Contracts, Final Project...',
    isEnrolled: true, // Simulating if the student is already enrolled
    progress: 40, // Simulating progress (in percentage)
  };

  const [isEnrolled, setIsEnrolled] = useState(course.isEnrolled);
  const [progress, setProgress] = useState(course.progress);

  const handleEnroll = () => {
    setIsEnrolled(true);
    setProgress(0); // Resets progress after enrollment
    // In a real app, you would make an API call to enroll the user in the course
  };

  return (
    <div className="course-detail">
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <h3>Objectives:</h3>
      <p>{course.objectives}</p>
      <h3>Expected Outcomes:</h3>
      <p>{course.outcomes}</p>
      <h3>Instructor: {course.instructor}</h3>
      <h3>Duration: {course.duration}</h3>
      <h3>Syllabus:</h3>
      <p>{course.syllabus}</p>

      {/* Enrollment Button */}
      {!isEnrolled ? (
        <button className="enroll-button" onClick={handleEnroll}>
          Enroll Now
        </button>
      ) : (
        <>
          <h3>Progress</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}>
              {progress}%
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        .course-detail {
          padding: 20px;
          max-width: 800px;
          margin: 0 auto;
        }

        h1 {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }

        h3 {
          margin-top: 20px;
        }

        p {
          margin-bottom: 10px;
        }

        .enroll-button {
          background-color: #0070f3;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1rem;
          margin-top: 20px;
        }

        .enroll-button:hover {
          background-color: #005bb5;
        }

        .progress-bar {
          background-color: #f0f0f0;
          border-radius: 5px;
          height: 30px;
          width: 100%;
          margin-top: 20px;
          overflow: hidden;
        }

        .progress {
          background-color: #0070f3;
          height: 100%;
          text-align: center;
          color: white;
          line-height: 30px;
          transition: width 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default CourseDetail;
