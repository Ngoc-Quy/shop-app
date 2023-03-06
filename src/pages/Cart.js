import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import watch from '../images/watch.jpg';
import {AiOutlineDelete} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import Container from '../components/Container';

function Cart() {
  return (
    <>
      <Meta title={'Giỏ hàng'} />
      <BreadCrumb title="Giỏ hàng" />
      <Container classes="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header d-flex justify-content-between algin-items-center">
                <h4 className="cart-col-1">Sản phẩm</h4>
                <h4 className="cart-col-2">Giá</h4>
                <h4 className="cart-col-3">Số lượng</h4>
                <h4 className="cart-col-4">Tổng</h4>
              </div>
              <div className="cart-data mb-2 d-flex justify-content-between algin-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img className="img-fluid" src={watch} alt="product" />
                  </div>
                  <div className="w-75">
                    <p>Watch</p>
                    <p>Size: S</p>
                    <p>Color: </p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">100.000 VNĐ</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input min={1} max={10} name="" id="" type="number" className="form-control" />
                  </div>
                  <div className="cart-icon d-flex justify-content-between align-items-center">
                    <AiOutlineDelete />
                    <p className="mt-3">Xoá</p>
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">100.000 VNĐ</h5>
                </div>
              </div>
            </div>
            <div>
              <div className="col-12 py-2 mt-4">
                <div className="d-flex justify-content-between align-items-baseline">
                  <Link to="/product" className="button">
                    Tiếp tục mua sắm
                  </Link>
                  <div className="d-flex align-items-end flex-column">
                    <h4>Tổng tiền thanh toán: 100.000 VNĐ</h4>
                    <p>kiểm tra</p>
                    <Link to="/checkout" className="button">
                      Thanh toán
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Cart;
