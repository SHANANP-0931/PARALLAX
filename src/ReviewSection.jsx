import React from 'react';
import './reviewsection.css';

const ReviewSection = () => {
  return (
    <section className="review-section" id="reviews">
      <h2>Customer Reviews</h2>
      <div className="review-container">
        <div className="review-box">
          <p>
            "Amazing services! Our website traffic increased significantly thanks to their SEO expertise."
          </p>
          <span>- John Doe</span>
        </div>
        <div className="review-box">
          <p>
            "The team is very professional and their web development skills are top-notch."
          </p>
          <span>- Sarah Williams</span>
        </div>
        <div className="review-box">
          <p>
            "Great designs, excellent communication, and fast turnaround time. Highly recommended!"
          </p>
          <span>- Michael Johnson</span>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
