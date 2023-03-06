import React from 'react';
import ReactStars from 'react-rating-stars-component';
import {Link} from 'react-router-dom';
import watch from '../images/watch.jpg';

function SpecialProduct() {
  return (
    <>
      <div className="col-3">
        <div className="special-product-card">
          <div className="d-flex justify-content-between">
            <div>
              <img className="img-fluid" src={watch} alt="watch" />
            </div>
          </div>
          <div className="special-product-content">
            <h5 className="brand">Giảm giá sốc</h5>
            <h6 className="title">Samsung galaxy Note10+ Mobile Phone: </h6>
            <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
            <p className="price">
              <span className="red-p">400.000đ</span>&nbsp; <strike>150.000đ</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                còn<b> 5 </b>ngày
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>
              </div>
            </div>
            <div className="prod-count my-3">
              <p>Số lượng còn: 5</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{width: '25%'}}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <Link className="button">Thêm vào giỏ hàng</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpecialProduct;
