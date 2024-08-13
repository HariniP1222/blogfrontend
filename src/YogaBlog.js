import React from 'react';
import './Yoga.css';  // Import your CSS for styling

const YogaBlog = () => {
  const blogPosts = [
    {
      id: '1',
      title: 'The Benefits of Daily Yoga Practice',
      content: 'Yoga has been practiced for centuries, offering physical and mental benefits. A daily practice can help improve flexibility, reduce stress, and enhance overall well-being. Whether you are a beginner or experienced, incorporating yoga into your routine can bring positive changes to your life.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzCj8u_1A2zSQ5GG9fiHeCid5wHoWTcDZHbg&s',
      date: 'August 12, 2024'
    },
    {
      id: '2',
      title: 'How to Get Started with Yoga',
      content: 'Starting yoga can seem intimidating, but it’s easier than you think. Begin with simple poses and focus on your breath. It’s important to find a comfortable space, use a yoga mat, and wear comfortable clothing. Over time, you will build strength and flexibility, making more advanced poses achievable.',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/yogi-woman-practices-sitting-yoga-on-mat-in-royalty-free-image-1644349756.jpg?crop=1xw:0.99882xh;center,top&resize=980:*',
      date: 'August 10, 2024'
    },
    {
      id: '3',
      title: 'Yoga for Stress Relief',
      content: 'In today’s fast-paced world, stress is a common problem. Yoga offers a natural way to manage stress through mindful movement and breathing exercises. This post explores different yoga poses and techniques that can help you relax and unwind, reducing stress levels significantly.',
      imageUrl: 'https://cdn.yogajournal.com/wp-content/uploads/2021/11/Bridge-Pose-Mod-2_Andrew-Clark_1.jpg',
      date: 'August 8, 2024'
    },
    {
      id: '4',
      title: 'Yoga and Meditation: A Perfect Pair',
      content: 'Yoga and meditation complement each other, providing a holistic approach to physical and mental wellness. This post discusses how combining yoga poses with meditation techniques can help achieve a deeper sense of peace and mindfulness.',
      imageUrl: 'https://images.everydayhealth.com/images/healthy-living/fitness/yoga-poses-for-beginners-02-722x406.jpg',
      date: 'August 6, 2024'
    },
    {
      id: '5',
      title: 'Advanced Yoga Poses for Strength and Flexibility',
      content: 'Once you have mastered the basics, you can challenge yourself with advanced yoga poses. This post covers some of the most beneficial advanced poses, focusing on building strength and increasing flexibility.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiqsGxJjLrD39yaRJ1Hw3owP_00HRgUA79tQ&s',
      date: 'August 4, 2024'
    },
    {
      id: '6',
      title: 'Creating a Yoga Routine: Tips and Tricks',
      content: 'Developing a consistent yoga routine can be key to reaping its long-term benefits. This post offers tips and tricks for creating a sustainable yoga practice that fits your lifestyle and keeps you motivated.',
      imageUrl: 'https://www.verywellfit.com/thmb/8VC2Ju3Ogt5CLbn6C4vo6S6fxvI=/400x250/filters:no_upscale():max_bytes(150000):strip_icc()/Verywell-20-4023748-Cobra02-1739-5be21f59c9e77c00519dac6b.jpg',
      date: 'August 2, 2024'
    }
  ];

  return (
    <div className="yoga-blog">
      <header className="blog-header">
        <h1>Yoga Blog</h1>
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

export default YogaBlog;
