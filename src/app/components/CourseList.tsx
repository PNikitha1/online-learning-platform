// components/CourseList.tsx
import React from 'react';
import CourseCard from './CourseCard';
import { courses } from '../data/course';

const CourseList = () => {
  return (
    <div className="course-list">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          id={course.id}
          title={course.title}
          instructor={course.instructor}
          difficulty={course.difficulty}
          rating={course.rating}
          thumbnail={course.thumbnail}
          description={course.description}
          syllabus={course.syllabus}
          instructorBio={course.instructorBio}
          duration={course.duration}
          prerequisites={course.prerequisites}
        />
      ))}
      <style jsx>{`
        .course-list {
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
};

export default CourseList;
