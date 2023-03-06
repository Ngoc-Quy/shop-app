import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Color from '../components/Color';
import Container from '../components/Container';
import Meta from '../components/Meta';

function CompareProduct() {
  return (
    <>
      <Meta title={'So sánh sản phẩm'} />
      <BreadCrumb title="So sánh sản phẩm" />
      <Container classes="compare-product-wrapper py-3 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">Apple watch seri 7+</h5>
                  <h6 className="price mb-3">100.000đ</h6>
                  <div>
                    <div className="product-detail">
                      <h5>Thương hiệu</h5>
                      <p>Apple</p>
                    </div>
                    <div className="product-detail">
                      <h5>Loại:</h5>
                      <p>Đồng hồ</p>
                    </div>
                    <div className="product-detail">
                      <h5>Tình trạng</h5>
                      <p>còn hàng</p>
                    </div>
                    <div className="product-detail">
                      <h5>màu sắc:</h5>
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h5>Kích thước:</h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">Apple watch seri 7+</h5>
                  <h6 className="price mb-3">100.000đ</h6>
                  <div>
                    <div className="product-detail">
                      <h5>Thương hiệu</h5>
                      <p>Apple</p>
                    </div>
                    <div className="product-detail">
                      <h5>Loại:</h5>
                      <p>Đồng hồ</p>
                    </div>
                    <div className="product-detail">
                      <h5>Tình trạng</h5>
                      <p>còn hàng</p>
                    </div>
                    <div className="product-detail">
                      <h5>màu sắc:</h5>
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h5>Kích thước:</h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
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

export default CompareProduct;
