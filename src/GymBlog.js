import React from 'react';
import './Gym.css';  // Import your CSS for styling

const GymBlog = () => {
  const blogPosts = [
    {
      id: '1',
      title: 'The Importance of Strength Training',
      content: 'Strength training is crucial for building muscle, increasing metabolism, and improving overall health. Whether you are a beginner or an advanced gym-goer, incorporating strength exercises into your routine can help you achieve your fitness goals.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2CGNZa-eoVP0BCTvZUheHQ_-h4P9hzLveCA&s',
      date: 'August 12, 2024'
    },
    {
      id: '2',
      title: 'How to Start a Gym Routine',
      content: 'Starting a gym routine can be intimidating, but with proper planning, you can create a routine that works for you. Begin with basic exercises and gradually increase the intensity. Consistency is key to seeing results and staying motivated.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9cHecUQFwKo3m8dgEfw-gRxHqGH95_42yMw&s',
      date: 'August 10, 2024'
    },
    {
      id: '3',
      title: 'Cardio vs. Weightlifting: Which is Better?',
      content: 'Both cardio and weightlifting have their benefits, but which one should you focus on? This post explores the advantages of each and how to balance them for optimal fitness results.',
      imageUrl: 'https://blogscdn.thehut.net/wp-content/uploads/sites/478/2017/02/25100416/female-holding-medicine-balls.jpg',
      date: 'August 8, 2024'
    },
    {
      id: '4',
      title: 'Maximizing Your Gym Time: Tips and Tricks',
      content: 'Maximizing your time at the gym can lead to better results in less time. This post offers tips on effective workouts, proper nutrition, and how to stay focused during your sessions.',
      imageUrl: 'https://images.ctfassets.net/0k812o62ndtw/1sF4HEJct7wuw34setBAd0/6fa2a9113489aa2abcd12774a17fe3d7/StrengthTrainingAtHome_en1886d41351db1d381e2e3bc01c273fb8.jpg',
      date: 'August 6, 2024'
    },
    {
      id: '5',
      title: 'The Role of Nutrition in Gym Performance',
      content: 'What you eat can significantly impact your gym performance. Learn how to fuel your body with the right nutrients to enhance your workouts and recovery.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ZKyK-DJEJBY9YsG8HyWVrMb8LKMy0023qQ&s',
      date: 'August 4, 2024'
    },
    {
      id: '6',
      title: 'Advanced Gym Workouts for Strength and Endurance',
      content: 'Once you’ve built a foundation, challenge yourself with advanced gym workouts. This post covers routines that focus on both strength and endurance for well-rounded fitness.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpt_xWIC3E0yBkT3dAF2kSPw8b55VtBJYs0w&s',
      date: 'August 2, 2024'
    }
  ];

  return (
    <div className="gym-blog">
      <header className="blog-header">
        <h1>Gym Blog</h1>
      </header>
      <div className="blog-posts">
        {blogPosts.map(post => (
          <div key={post.id} className="blog-post">
            <div className="post-image-container">
              <img src={post.imageUrl} alt={post.title} className="post-image" />
            </div>
            <div className="post-content">
              <h2 className="post-title">{post.title}</h2>
              <p className="post-date">{post.date}</p>
              <p className="post-text">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GymBlog;
