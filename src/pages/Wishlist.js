import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import Meta from '../components/Meta';

function Wishlist() {
  return (
    <>
      <Meta title={'Sản phẩm yêu thích'} />
      <BreadCrumb title="Sản phẩm yêu thích" />
      <Container classes="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                <div className="wishlist-card-image">
                  <img className="img-fluid w-100" src="images/watch.jpg" alt="watch" />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">Horor T1 1B RAM ROM 7 inch</h5>
                  <h6 className="price">$100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                <div className="wishlist-card-image">
                  <img className="img-fluid w-100" src="images/watch.jpg" alt="watch" />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">Horor T1 1B RAM ROM 7 inch</h5>
                  <h6 className="price">$100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                <div className="wishlist-card-image">
                  <img className="img-fluid w-100" src="images/watch.jpg" alt="watch" />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">Horor T1 1B RAM ROM 7 inch</h5>
                  <h6 className="price">$100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                <div className="wishlist-card-image">
                  <img className="img-fluid w-100" src="images/watch.jpg" alt="watch" />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">Horor T1 1B RAM ROM 7 inch</h5>
                  <h6 className="price">$100</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Wishlist;
