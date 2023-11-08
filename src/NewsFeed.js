
// import Image from 'react-image';
import './App.css';
import React, { useState, useEffect } from 'react';



function NewsFeed() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=66b6cfcb43c04d25b54dbeab0ac54b4b')
      .then(response => response.json())
      .then(data => setArticles(data.articles));
  }, []);

  return (
    <div className='grid-container'>
      {articles.map(article => (
        <div key={article.id} className='newsdata'>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          
        </div>
      ))}
    </div>
  );
}

export default NewsFeed;
