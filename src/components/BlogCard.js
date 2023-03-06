import React from 'react';
import {Link} from 'react-router-dom';

const BlogCard = () => {
  return (
    <>
      <div className="blog-card">
        <div className="card-image">
          <img className="img-fluid w-100" src="images/blog-1.jpg" alt="blogcard" />
        </div>
        <div className="blog-content">
          <p className="date">Thứ hai, ngày 12 tháng 2, 2023</p>
          <h5 className="title">Tầm hình tuyệt vời</h5>
          <p className="desc">
            sử dụng công nghệ 3D con người có thể nhìn thế giới xung quanh bằng hệ thống thực tế ảo và có thể sử dụng nó
            vào nhiều mục đích khác nhau đêm lại cho bạn cảm nhận tốt nhất về thế giới công nghệ phát triển hiện nay
          </p>
          <Link to="/blog/:id" className="button">
            Đọc thêm
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
