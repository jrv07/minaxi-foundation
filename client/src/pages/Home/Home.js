import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const stats = [
    { number: '500+', label: 'Students Helped' },
    { number: '₹50L+', label: 'Scholarships Distributed' },
    { number: '5', label: 'Years of Service' },
    { number: '100%', label: 'Transparency' }
  ];

  const successStories = [
    {
      name: "Priya's Journey",
      story: "From struggling to pay school fees to becoming a software engineer...",
      image: "/assets/images/student1.jpg"
    },
    {
      name: "Rahul's Achievement", 
      story: "Our scholarship helped him become the first graduate in his family...",
      image: "/assets/images/student2.jpg"
    },
    {
      name: "Anita's Dream",
      story: "Now a teacher, she's giving back to her community...",
      image: "/assets/images/student3.jpg"
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Empowering Dreams Through Education
              </h1>
              <p className="hero-subtitle">
                Supporting underprivileged children in their educational journey. 
                Because every child deserves a chance to learn and grow.
              </p>
              <div className="hero-actions">
                <Link to="/apply" className="btn btn-primary">
                  Apply for Scholarship
                </Link>
                <Link to="/donate" className="btn btn-secondary">
                  Support Our Cause
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <img 
                src="/assets/images/hero-children.jpg" 
                alt="Children studying"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x400/B8E6B8/333333?text=Children+Learning';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <div className="container">
          <div className="section-content">
            <h2>Our Mission</h2>
            <p>
              The Minaxi Gajjar Foundation is dedicated to breaking the cycle of poverty 
              through education. We provide scholarships, educational resources, and 
              mentorship to deserving students who lack the financial means to pursue their studies.
            </p>
            <Link to="/about" className="btn btn-outline">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Success Stories */}
      <section className="success-stories">
        <div className="container">
          <h2>Success Stories</h2>
          <div className="stories-grid">
            {successStories.map((story, index) => (
              <div key={index} className="story-card">
                <img 
                  src={story.image} 
                  alt={story.name}
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/150x150/FFE5B4/333333?text=${story.name.charAt(0)}`;
                  }}
                />
                <h4>{story.name}</h4>
                <p>{story.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;