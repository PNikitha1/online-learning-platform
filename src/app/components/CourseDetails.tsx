// // pages/courses/[id].tsx
// import { useRouter } from 'next/router';
// import React from 'react';

// // Mock Data
// const mockCourseDetails = {
//   id: 1,
//   title: 'Blockchain Basics',
//   description: 'Learn the fundamentals of blockchain technology and its applications.',
//   syllabus: '1. Introduction\n2. Blockchain Structure\n3. Use Cases',
//   instructor: 'John Doe',
//   duration: '10 hours',
//   prerequisites: 'None',
//   reviews: ['Great course!', 'Very informative.', 'Loved the instructor.'],
//   rating: 4.8,
// };

// const CourseDetails: React.FC = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   const course = mockCourseDetails; // This would be fetched by `id` in real-world scenarios

//   return (
//     <div className="course-details">
//       <h1>{course.title}</h1>
//       <p><strong>Instructor:</strong> {course.instructor}</p>
//       <p><strong>Rating:</strong> {course.rating} ⭐</p>
//       <p><strong>Duration:</strong> {course.duration}</p>
//       <p><strong>Prerequisites:</strong> {course.prerequisites}</p>
//       <h2>Description</h2>
//       <p>{course.description}</p>
//       <h2>Syllabus</h2>
//       <pre>{course.syllabus}</pre>
//       <h2>Reviews</h2>
//       <ul>
//         {course.reviews.map((review, idx) => (
//           <li key={idx}>{review}</li>
//         ))}
//       </ul>

//       <style jsx>{`
//         .course-details {
//           padding: 20px;
//         }
//         h1 {
//           font-size: 2rem;
//           margin-bottom: 20px;
//         }
//         h2 {
//           font-size: 1.5rem;
//           margin: 15px 0;
//         }
//         ul {
//           padding-left: 20px;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CourseDetails;
