import React from 'react';
import './Blog.css';

// Header component
const Header1 = () => (
  <header className="header">
    <div className="header-content">
      <div className="logo">EduWell</div>
      <div className="tagline">Your Guide to a Balanced Student Life</div>
    </div>
  </header>
);

// Simple Math Game Component (static)
const MathGame = () => (
  <div className="math-game">
    <h3>Math Challenge</h3>
    <p>Solve the following:</p>
    <p>5 + 3 = ?</p>
    <input type="text" placeholder="Your Answer" />
    <button>Submit</button>
    <p>Check the answer yourself: 5 + 3 = 8</p>
  </div>
);

// Sidebar component with expanded content
const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar-section">
      <h2>Recent Posts</h2>
      <ul>
        <li><a href="#post1">How to Manage Your Study Time</a></li>
        <li><a href="#post2">Benefits of Regular Exercise</a></li>
        <li><a href="#post3">Creating a Productive Study Environment</a></li>
        <li><a href="#post4">Effective Study Techniques for Exams</a></li>
        <li><a href="#post5">Balancing Academics and Social Life</a></li>
      </ul>
    </div>
    <div className="sidebar-section">
      <h2>Categories</h2>
      <ul>
        <li><a href="#category1">Study Tips</a></li>
        <li><a href="#category2">Health & Fitness</a></li>
        <li><a href="#category3">Productivity</a></li>
        <li><a href="#category4">Mental Wellness</a></li>
        <li><a href="#category5">Time Management</a></li>
      </ul>
    </div>
    <div className="sidebar-section">
      <h2>Follow Us</h2>
      <ul>
        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
      </ul>
    </div>
    <div className="sidebar-section">
      <h2>Fun Math Game</h2>
      <MathGame />
      <p>Try solving the math challenge and test your skills. It's a fun way to keep your brain active!</p>
    </div>
    <div className="sidebar-section">
      <h2>Helpful Resources</h2>
      <div className="resource">
        <img src="https://cache.desktopnexus.com/thumbseg/1307/1307154-bigthumbnail.jpg" alt="Resource 1" className="resource-img" />
        <p>Resource 1: Tips for Healthy Living</p>
        <p>Learn how to maintain a balanced lifestyle with these practical tips for healthy living.</p>
      </div>
      <div className="resource">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_e2Bs9dU21R9v99FReA3lSGx9_HBgXVitgSDK6sBZkmTHdXP5PjK_cfZkaBL6DsQ0mW4&usqp=CAU" alt="Resource 2" className="resource-img" />
        <p>Resource 2: Study Strategies for Success</p>
        <p>Discover effective strategies and methods to enhance your study habits and achieve academic success.</p>
      </div>
      <div className="resource">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV8NYSoMkb_vlBjrDQgrrEfQvEBze7oAIk7A&s" alt="Resource 3" className="resource-img" />
        <p>Resource 3: Fun Exercise Ideas</p>
        <p>Explore creative and enjoyable exercise routines that can help you stay active and healthy.</p>
      </div>
    </div>
    <div className="sidebar-section">
      <h2>Quick Links</h2>
      <ul>
        <li><a href="#link1">Quick Guide to Study Plans</a></li>
        <li><a href="#link2">Best Apps for Time Management</a></li>
        <li><a href="#link3">Healthy Eating Tips</a></li>
        <li><a href="#link4">Strategies for Effective Learning</a></li>
        <li><a href="#link5">How to Avoid Burnout</a></li>
      </ul>
    </div>
  </aside>
);

// Main content component with new sections
const MainContent = () => (
  <main className="main-content">
    <section className="post" id="post1">
      <h2>How to Manage Your Study Time</h2>
      <img src="https://fordhaminstitute.org/sites/default/files/styles/single_main_image/public/2021-04/cao-4-8-21.jpg?itok=jaGj1oE6" alt="Study Time" className="post-img" />
      <p>Effective time management is crucial for academic success. Learn strategies to organize your study schedule and improve productivity.</p>
      <div className="post-details">
        <h3>Key Strategies:</h3>
        <ul>
          <li>Prioritize your tasks and create a schedule.</li>
          <li>Use time management tools and techniques.</li>
          <li>Set specific, achievable goals.</li>
          <li>Avoid procrastination and stay focused.</li>
        </ul>
      </div>
    </section>
    <section className="post" id="post2">
      <h2>Benefits of Regular Exercise</h2>
      <img src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/05/kids-exercise-apps.jpg" alt="Exercise Benefits" className="post-img" />
      <p>Regular exercise not only improves physical health but also boosts mental well-being. Discover the benefits and how to incorporate exercise into your routine.</p>
    </section>
    <section className="post" id="post3">
      <h2>Creating a Productive Study Environment</h2>
      <img src="https://empoweredparents.co/wp-content/uploads/2019/07/learning-environment-at-home-5.jpg" alt="Study Environment" className="post-img" />
      <p>A conducive study environment can enhance concentration and effectiveness. Explore tips for setting up your study space for maximum productivity.</p>
    </section>
  </main>
);

// Footer component
const Footer = () => (
  <footer className="footer">
    <p>&copy; 2024 EduWell. All rights reserved.</p>
  </footer>
);

// Main App component
const Blog = () => (
  <div className="container">
    <Header1 />
    <div className="layout">
      <Sidebar />
      <MainContent />
    </div>
    <Footer/>
  </div>
);

export default Blog;
