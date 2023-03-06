import React from 'react';
import {BiArrowBack} from 'react-icons/bi';
import {Link} from 'react-router-dom';
import Container from '../components/Container';
import watch from '../images/watch.jpg';

function Checkout() {
  return (
    <>
      <Container classes="checkout-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">Ngọc Quý</h3>
                <nav style={{'--bs-breadcrumb-divider': '>'}} aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link className="text-dark total-price" to="/cart">
                        Cart
                      </Link>
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item total-price active" aria-current="page">
                      Thông tin liên hệ
                    </li>
                    &nbsp; /<li className="breadcrumb-item total-price active">Shipping</li>
                    &nbsp; /
                    <li className="breadcrumb-item total-price active" aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="title total">Thông tin liên lạc</h4>
                <p className="user-details total">ngoc quy (phamngocquydh23g@gmail.com)</p>
                <h4 className="mb-3">Shipping address</h4>
                <div className="d-flex mb-3 gap-15 flex-wrap justify-content-between" action="">
                  <div className="w-100">
                    <div>
                      <select name="" id="" className="form-control form-select">
                        <option value="" selected disabled>
                          Chọn Quốc tịch
                        </option>
                      </select>
                    </div>
                    <div>
                      <div className="flex-grow-1">
                        <input className="form-control" placeholder="Họ" type="text"></input>
                      </div>
                      <div className="flex-grow-1">
                        <input className="form-control" placeholder="Tên" type="text"></input>
                      </div>
                    </div>
                    <div className="w-100">
                      <input className="form-control" placeholder="Địa chỉ" type="text"></input>
                    </div>
                    <div className="w-100">
                      <input className="form-control" placeholder="Địa chỉ nhà riêng" type="text"></input>
                    </div>
                    <div className="flex-grow-1">
                      <input className="form-control" placeholder="Thành phố" type="text"></input>
                    </div>
                    <div className="flex-grow-1">
                      <select name="" id="" className="form-control form-select">
                        <option value="" selected disabled>
                          Chọn trạng thái
                        </option>
                      </select>
                    </div>
                    <div className="flex-grow-1">
                      <input className="form-control" placeholder="Mã vùng" type="text"></input>
                    </div>
                    <div className="w-100">
                      <div className="d-flex justify-content-between align-items-center">
                        <Link to="/cart" className="text-dark">
                          <BiArrowBack className="me-2" />
                          Trở lại giỏ hàng
                        </Link>
                        <Link to="/cart" className="button">
                          Tiếp tục mua hàng
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="border-bottom py-4">
                <div className="d-flex gap-10 mb-2 align-items-center">
                  <div className="w-75 d-flex gap-10">
                    <div className="w-25 position-relative">
                      <span
                        style={{top: '-10px', right: '2px'}}
                        className="position-absolute badge bg-dark p-2 text-white rounded-circle"
                      >
                        1
                      </span>
                      <img className="img-fluid" src={watch} alt="product" />
                    </div>
                    <div>
                      <h5 className="total">fdsa</h5>
                      <p className="total-price">fdsa</p>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="total">$ 100</h5>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="total">Subtotal</p>
                  <p className="total-price">$ 1000</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0 total">Shipping</p>
                  <p className="mb-0 total-price">$ 1000</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                <h4 className="total">Total</h4>
                <h5 className="total-price">$ 1000</h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Checkout;
