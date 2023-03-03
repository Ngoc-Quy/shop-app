import React from 'react';
import {Link} from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import {HiOutlineArrowLeft} from 'react-icons/hi';

function SingleBlog() {
  return (
    <div>
      <Meta title={'Dynamic Blog Name'} />
      <BreadCrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <HiOutlineArrowLeft className="fs-4" />
                  Go to back to blog
                </Link>
                <h3 className="title">A beautiful sunday</h3>
                <img className="img-fluid w-100 my-4" src="images/blog-1.jpg" alt="blog" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta parturient eget placerat magna donec
                  dapibus orci hac aliquam. Vel conubia sagittis mattis posuere vestibulum commodo blandit vulputate
                  semper. In maecenas penatibus phasellus eu aptent porta fusce sociosqu senectus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
