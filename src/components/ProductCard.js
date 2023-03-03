import React from 'react';
import ReactStars from 'react-rating-stars-component';
import {Link, useLocation} from 'react-router-dom';

const ProductCard = ({grid}) => {
  let location = useLocation();

  return (
    <>
      <div className={` ${location.pathname === '/store' ? `gr-${grid}` : 'col-3'} `}>
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img className="img-fluid" src="images/watch.jpg" alt="product" />
            <img className="img-fluid" src="images/watch-1.jpg" alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">kids of the bukl 10 pack muild colored for</h5>
            <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
            <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae hendrerit tempus quisque in etiam semper
              conubia. Elit eu mus netus enim maecenas quis quam. Imperdiet purus netus a leo semper elementum sapien.
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="prodcompare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div className={` ${location.pathname === '/store' ? `gr-${grid}` : 'col-3'} `}>
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img className="img-fluid" src="images/watch.jpg" alt="product" />
            <img className="img-fluid" src="images/watch-1.jpg" alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">kids of the bukl 10 pack muild colored for</h5>
            <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
            <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae hendrerit tempus quisque in etiam semper
              conubia. Elit eu mus netus enim maecenas quis quam. Imperdiet purus netus a leo semper elementum sapien.
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="prodcompare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
