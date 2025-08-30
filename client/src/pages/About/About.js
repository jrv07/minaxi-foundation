import React from 'react';
import './About.css';

const About = () => {
  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'Striving for the highest standards in everything we do'
    },
    {
      icon: '🤝',
      title: 'Integrity', 
      description: 'Operating with complete transparency and honesty'
    },
    {
      icon: '💝',
      title: 'Compassion',
      description: 'Understanding and addressing the needs of our beneficiaries'
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'Creating lasting impact for generations to come'
    }
  ];

  return (
    <div className="about-page">
      <div className="container">
        <div className="page-header">
          <h1>About Minaxi Gajjar Foundation</h1>
          <p className="page-subtitle">
            Dedicated to transforming lives through the power of education
          </p>
        </div>

        <section className="about-content">
          <div className="content-section">
            <h2>Our Story</h2>
            <p>
              Founded in memory of Late Minaxi Gajjar, our foundation was established 
              with the vision of providing quality education to underprivileged children. 
              Minaxi Gajjar was a passionate educator who believed that education is the 
              key to breaking the cycle of poverty.
            </p>
          </div>

          <div className="content-section">
            <h2>Our Mission</h2>
            <p>
              To provide financial assistance, educational resources, and mentorship 
              to deserving students from economically disadvantaged backgrounds, 
              enabling them to pursue their academic dreams and create better futures 
              for themselves and their communities.
            </p>
          </div>

          <div className="content-section">
            <h2>Our Vision</h2>
            <p>
              A world where financial constraints never become barriers to education, 
              and every child has the opportunity to realize their full potential through learning.
            </p>
          </div>

          <div className="values-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;