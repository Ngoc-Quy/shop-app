import React from 'react';
import {HiOutlineArrowLeft} from 'react-icons/hi';
import {Link} from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import Meta from '../components/Meta';
import blog from '../images/blog-1.jpg';

function SingleBlog() {
  return (
    <div>
      <Meta title={'Bài viết'} />
      <BreadCrumb title="Bài viết" />
      <Container classes="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <HiOutlineArrowLeft className="fs-4" />
                  Trở lại trang bài viết
                </Link>
                <h3 className="title">Tầm nhìn tuyệt vời</h3>
                <img className="img-fluid w-100 my-4" src={blog} alt="blog" />
                <p>
                  sử dụng công nghệ 3D con người có thể nhìn thế giới xung quanh bằng hệ thống thực tế ảo và có thể sử
                  dụng nó vào nhiều mục đích khác nhau đêm lại cho bạn cảm nhận tốt nhất về thế giới công nghệ phát
                  triển hiện nay
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SingleBlog;
