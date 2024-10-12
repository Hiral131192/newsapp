import React from 'react';
import './Card.css'; 

const Card = ({ title, date, image, description, url ,source}) => {
  return (
    <div className="news-card">
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <strong>Source:</strong> {source} 
        {/* <p className="card-date">{new Date(date).toLocaleDateString()}</p> */}
        <p className="card-date" >{new Date(date).toLocaleDateString()}</p>
        <p className="card-description">{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="read-more">
          Read more
        </a>
      </div>
    </div>
  );
};

export default Card;
