import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  },[category]);
  return (
    <div>
      <h2 className="text-center my-3">
        Latest <span className="badge bg-info">News</span>
      </h2>
      <div className="row">
      {articles.map((news,index)=>(
        <NewsItems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      ))}
     </div>
    </div>
  );
};

export default NewsBoard;
