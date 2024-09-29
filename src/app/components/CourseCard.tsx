import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const CourseCard = ({
  id,
  title,
  instructor,
  difficulty,
  rating,
  thumbnail,
  description = '', // Provide default empty description
}) => {
  const router = useRouter();

  const goToDetails = () => {
    router.push(`/courses/${id}`); // Navigates to the dynamic course detail page
  };

  return (
    <div className="course-card" onClick={goToDetails}>
      <Image
        src={thumbnail}
        alt={title}
        width={300}
        height={200}
        objectFit="cover"
        className="course-thumbnail"
      />
      <h3>{title}</h3>
      <p>Instructor: {instructor}</p>
      <p>Difficulty: {difficulty}</p>
      <p>Rating: {rating} ⭐</p>
      <p className="description">
        {description.substring(0, 100)}...
      </p>
      <style jsx>{`
        .course-card {
          width: 300px;
          border: 1px solid #ddd;
          padding: 20px;
          margin: 10px;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background-color: #f9f9f9;
          border-radius: 10px;
          text-align: center;
        }

        .course-card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }

        .course-thumbnail {
          border-radius: 5px;
        }

        h3 {
          font-size: 1.5rem;
          margin: 10px 0;
        }

        p {
          margin: 5px 0;
        }

        .description {
          color: #555;
        }
      `}</style>
    </div>
  );
};

export default CourseCard;
