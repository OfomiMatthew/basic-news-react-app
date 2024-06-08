import React from 'react';

const dummyImage = `https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg`
const NewsItems = ({ title, description, src, url }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card bg-dark text-light h-100">
        <img  src={src ? src:dummyImage} style={{ height: '200px', objectFit: 'cover' }} className="card-img-top card-hover" alt="News" />
        <div className="card-body">
          <h5 className="card-title">{title !=='[Removed]' ? title: "No data available yet"}</h5>
          <p className="card-text">{description && description!=='[Removed]'? description.slice(0, 50) +'...' : "No info available yet"}</p>
        </div>
        <div className="card-footer">
          <a href={url} className="btn btn-primary" target='_blank' rel='noopener noreferrer'>Read More</a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
