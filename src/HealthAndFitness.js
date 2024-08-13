import React, { useState } from 'react';
import './HealthAndFitness.css';  // Import your CSS for styling

const HealthAndFitness = ({ onCourseSelect, onProceedToRegister }) => {
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  const courses = [
    { id: 'yoga', name: 'Yoga', description: 'Improve your flexibility and balance with gentle poses and stretches.', fee: 50, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzCj8u_1A2zSQ5GG9fiHeCid5wHoWTcDZHbg&s' },
    { id: 'pilates', name: 'Pilates', description: 'Strengthen your core and enhance stability with targeted exercises.', fee: 60, imageUrl: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/04/HL-1.07.SideKick.gif?h=840' },
    { id: 'strength', name: 'Strength Training', description: 'Build muscle and increase strength with resistance exercises and weightlifting.', fee: 70, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMw8qED2MqjFjami2x-sQGzZUycRDiz6OgQg&s' },
    { id: 'zumba', name: 'Zumba', description: 'Dance your way to fitness with fun, energetic dance routines.', fee: 55, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG8Su9KYHsxOnM9_x49OzZku5V7BMDys-DYQ&s' },
    { id: 'aerobics', name: 'Aerobics', description: 'Get your heart pumping with high-energy aerobic exercises.', fee: 65, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX3qEx6bcfZLHXEgyPO7lmb-dY3UNBMVxSzw&s' },
    { id: 'kickboxing', name: 'Kickboxing', description: 'Engage in a high-intensity workout that combines martial arts and cardio.', fee: 75, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZocuBj7gy-z_pVMGC57Y-8Waet1WFRhKQIA&s' },
    { id: 'cycling', name: 'Indoor Cycling', description: 'Burn calories and build endurance with this intense cycling workout.', fee: 70, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMP2V4azWwDu2VPVOLX4SeK9jQ-XjVE-b7ew&s' },
    { id: 'meditation', name: 'Meditation', description: 'Relax your mind and body with guided meditation techniques.', fee: 40, imageUrl: 'https://www.artofliving.org/in-en/app/uploads/2024/07/benefits-of-meditation-girl-meditating-at-blr-ashram.jpg' },
    { id: 'swimming', name: 'Swimming', description: 'Improve your swimming skills with professional coaching and guidance.', fee: 80, imageUrl: 'https://www.circlehealthgroup.co.uk/-/media/circle/articles/blogs/health-matters/hero/swim-to-strengthen-your-knees.jpg?as=1&h=418&iar=1&w=800&rev=20325fb8acb342aba500e0e2fd15b2bf' } // New course added
  ];

  const handleCourseClick = (courseId) => {
    setSelectedCourseId(courseId);
    const selectedCourse = courses.find(course => course.id === courseId);
    if (selectedCourse) {
      onCourseSelect(selectedCourse.name);
    }
  };

  return (
    <div className="health-and-fitness">
      <header className="header-bar">
        <h1>Health and Fitness </h1>
      </header>
      <div className="course-list">
        {courses.map(course => (
          <div
            key={course.id}
            id={course.id}
            className={`course-card ${selectedCourseId === course.id ? 'selected' : ''}`}
            onClick={() => handleCourseClick(course.id)}
            role="button"
            tabIndex="0"
            onKeyDown={(e) => e.key === 'Enter' && handleCourseClick(course.id)}
            aria-label={`Select ${course.name}`}
          >
            <div className="course-image-container">
              <img src={course.imageUrl} alt={course.name} className="course-image" />
            </div>
            <div className="course-details">
              <h2 className="course-title">{course.name}</h2>
              <p className="course-description">{course.description}</p>
              <p className="course-fee">${course.fee.toFixed(2)}</p> {/* Display the fee */}
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default HealthAndFitness;
