import React, { useState } from 'react';
import './Magazine.css';

// Magazine Cover Component
const MagazineCover = () => (
  <div className="magazine-cover">
    <header className="cover-header">
      <h1 className="magazine-title">Wellness Life</h1>
      <p className="issue-date">August 2024</p>
    </header>
    <div className="cover-content">
      <div className="cover-image-wrapper">
        <img src="https://previews.123rf.com/images/dizanna/dizanna1706/dizanna170600061/79828090-wellness-word-cloud-collage-health-concept-background.jpg" alt="Magazine Cover" className="cover-image" />
      </div>
      <div className="cover-text">
        <h2 className="feature-title">Transform Your Health and Wellness</h2>
        <p className="feature-summary">Explore the latest in fitness trends, nutrition tips, and mental wellness strategies. Unlock a healthier you with our expert insights!</p>
        <a href="#articles" className="read-more">Explore Now</a>
      </div>
    </div>
    <footer className="cover-footer">
      <p>&copy; 2024 Wellness Life Magazine</p>
    </footer>
  </div>
);

// Article Section Component
const ArticleSection = () => {
  const [expandedArticle, setExpandedArticle] = useState(null);

  const handleReadMore = (index) => {
    setExpandedArticle(expandedArticle === index ? null : index);
  };

  const articles = [
    {
      title: "Quick Workouts for Busy Schedules",
      summary: "Short, effective workouts that can be done in your living room. Stay fit without sacrificing your schedule.",
      image: "https://thumbs.dreamstime.com/b/closeup-portrait-muscular-man-workout-barbell-gym-brutal-bodybuilder-athletic-six-pack-perfect-abs-shoulders-55122231.jpg",
      content: (
        <>
          <p>With our fast-paced lives, finding time for the gym can be challenging. However, staying fit doesn’t have to mean spending hours at a fitness center. Here are some quick workouts you can do at home:</p>
          <ul>
            <li><strong>High-Intensity Interval Training (HIIT):</strong> Alternate between short bursts of intense exercise and recovery periods.</li>
            <li><strong>Bodyweight Exercises:</strong> Push-ups, squats, and burpees are excellent for a full-body workout.</li>
            <li><strong>Resistance Bands:</strong> Use bands to add resistance to traditional exercises and enhance muscle strength.</li>
          </ul>
          <p>Incorporating these exercises into your daily routine can help you stay in shape without needing to carve out extra time for the gym.</p>
        </>
      )
    },
    {
      title: "The Best Foods for Peak Performance",
      summary: "Boost your energy and performance with these nutrient-packed foods. Discover the top choices for a healthier diet.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXDj9vI_yW8MhC3MiA39qprKBVV0NHewlpzQ&s",
      content: (
        <>
          <p>A balanced diet is crucial for maintaining energy levels and enhancing performance throughout the day. Here are some foods that should be part of your diet:</p>
          <ul>
            <li><strong>Leafy Greens:</strong> Spinach and kale are packed with vitamins and minerals.</li>
            <li><strong>Lean Proteins:</strong> Chicken, turkey, and legumes provide essential amino acids.</li>
            <li><strong>Whole Grains:</strong> Brown rice and quinoa offer sustained energy release.</li>
          </ul>
          <p>Including these foods in your meals can help improve overall health and support peak performance in both daily activities and workouts.</p>
        </>
      )
    },
    {
      title: "Mindfulness Techniques for a Balanced Life",
      summary: "Incorporate mindfulness into your daily routine to enhance your well-being and reduce stress.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFef6j_6MDLljcL6vFZQmXw00Yq0yycMNAcw&s",
      content: (
        <>
          <p>Mindfulness practices can help you manage stress and promote a sense of well-being. Here are some techniques to try:</p>
          <ul>
            <li><strong>Breathing Exercises:</strong> Focus on your breath to calm your mind and reduce anxiety.</li>
            <li><strong>Guided Meditation:</strong> Use meditation apps or online resources to follow guided sessions.</li>
            <li><strong>Mindful Eating:</strong> Pay attention to the flavors and textures of your food to enhance your eating experience.</li>
          </ul>
          <p>Regular practice of these techniques can lead to a more balanced and mindful lifestyle.</p>
        </>
      )
    }
  ];

  return (
    <>
    <div className="article-section" id="articles">
      <h2 className="section-title">Featured Articles</h2>
      <div className="article-list">
        {articles.map((article, index) => (
          <article key={index} className="article">
            <img src={article.image} alt={`Article ${index + 1}`} className="article-image" />
            <h3 className="article-title">{article.title}</h3>
            <p className="article-summary">{article.summary}</p>
            <a 
              href="#"
              className="read-more"
              onClick={(e) => {
                e.preventDefault();
                handleReadMore(index);
              }}
            >
              {expandedArticle === index ? 'Read Less' : 'Read More'}
            </a>
            {expandedArticle === index && <div className="article-content">{article.content}</div>}
          </article>
        ))}
      </div>
    </div>
    <div id="done">
      <a href="/Trial">Subscribe for weekly editions</a>
    </div>
    </>
    
  );
};


const Magazine = () => (
  <div>
    <MagazineCover />
    <ArticleSection />
  </div>
);

export default Magazine;
