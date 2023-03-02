import React from 'react';
import {Link} from 'react-router-dom';

const BlogCard = () => {
  return (
    <>
      <div className="col-3">
        <div className="blog-card">
          <div className="card-image">
            <img className="img-fluid" src="images/blog-1.jpg" alt="blogcard" />
          </div>
          <div className="blog-content">
            <p className="date">1 Mar, 2023</p>
            <h5 className="title">a beautiful sunday moring renaissance</h5>
            <p className="desc">Loren ipsum sit amet consectetur aadipsing elit. At quasd dsah</p>
            <Link to="/" className="button">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
