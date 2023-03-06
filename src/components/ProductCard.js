import React from 'react';
import ReactStars from 'react-rating-stars-component';
import {Link, useLocation} from 'react-router-dom';
import addcart from '../images/add-cart.svg';
import prodcompare from '../images/prodcompare.svg';
import view from '../images/view.svg';
import watch2 from '../images/watch-1.jpg';
import watch from '../images/watch.jpg';
import wish from '../images/wish.svg';

const ProductCard = ({grid}) => {
  let location = useLocation();

  return (
    <>
      <div className={` ${location.pathname === '/product' ? `gr-${grid}` : 'col-3'} `}>
        <Link to={`${location.pathname === '/' ? 'product/:id' : ':id'}`} className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wish" />
            </button>
          </div>
          <div className="product-image">
            <img className="img-fluid" src={watch} alt="product" />
            <img className="img-fluid" src={watch2} alt="product" />
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
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="prodcompare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div className={` ${location.pathname === '/product' ? `gr-${grid}` : 'col-3'} `}>
        <Link to={`${location.pathname === '/' ? 'product/:id' : ':id'}`} className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wish" />
            </button>
          </div>
          <div className="product-image">
            <img className="img-fluid" src={watch} alt="product" />
            <img className="img-fluid" src={watch2} alt="product" />
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
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="prodcompare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
