import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './News.css';
import Card from './Card'; 
//const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
const apiUrl = 'http://localhost:5000/api/news';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(apiUrl);
        setNews(response.data.slice(0, 5) || []);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch news. Please try again.');
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>Loading news...</p>;
  if (error) return <p>{error}</p>;
  if (!news || news.length === 0) return <p>No news available</p>;

  return (
<div className="news-section">
<h1>Latest Headlines</h1>
<div className="news-container">
  {news.map((article, index) => (
    <Card
      key={index}
      title={article.title}
      date={new Date(article.publishedAt).toLocaleString()}
      image={article.urlToImage}
      description={article.description}
      url={article.url}
      source ={article.source.name}
    />
  ))}
</div>
</div>

  );
};

export default News;
