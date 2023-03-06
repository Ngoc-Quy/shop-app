import React, {useState} from 'react';
import {AiOutlineHeart} from 'react-icons/ai';
import {TbGitCompare} from 'react-icons/tb';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import ReactStars from 'react-rating-stars-component';
import BreadCrumb from '../components/BreadCrumb';
import Color from '../components/Color';
import Container from '../components/Container';
import Meta from '../components/Meta';
import SpecialProduct from '../components/SpecialProduct';
import watch from '../images/watch.jpg';

function SingleProduct() {
  const [orderedProduct, setorderedProduct] = useState(true);

  const copyToClipboard = (text) => {
    var textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  };

  return (
    <div>
      <Meta title={'Single Product'} />
      <BreadCrumb title="Single Product" />
      <Container classes="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <InnerImageZoom
                    // zoomType={'hover'}
                    src={
                      'https://i5.walmartimages.com/asr/29630ff1-5735-4735-8c34-3932bdcbe346_1.b453eb875328ae7f784bacf54f5b1137.jpeg'
                    }
                  />
                </div>
                <div className="other-product-images d-flex flex-wrap gap-15">
                  <div>
                    <img className="img-fluid" src={watch} alt="headphone" />
                  </div>
                  <div>
                    <img className="img-fluid" src={watch} alt="headphone" />
                  </div>
                  <div>
                    <img className="img-fluid" src={watch} alt="headphone" />
                  </div>
                  <div>
                    <img className="img-fluid" src={watch} alt="headphone" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">Kids Headphone bulk 10 pack</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$100.00</p>
                  <div className="d-flex algin-items-center gap-10">
                    <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
                    <p className="mb-0 t-review">(2 review)</p>
                  </div>
                  <a className="review-btn" href="#review">
                    write a Review
                  </a>
                </div>
                <div className="py-3">
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Type:</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Brand:</h3>
                    <p className="product-data">Havels</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Category : </h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Tags : </h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Availablity : </h3>
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Size : </h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark boder-secondary">S</span>
                      <span className="badge border border-1 bg-white text-dark boder-secondary">M</span>
                      <span className="badge border border-1 bg-white text-dark boder-secondary">XL</span>
                      <span className="badge border border-1 bg-white text-dark boder-secondary">XXL</span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Color : </h3>
                    <Color />
                  </div>
                  <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                    <h3 className="product-heading">Quantity : </h3>
                    <div className="">
                      <input
                        className="form-control"
                        type="number"
                        style={{width: '70px'}}
                        id=""
                        name=""
                        min={1}
                        max={10}
                      />
                    </div>
                    <div className="d-flex align-items-center gap-30 ms-5">
                      <button className="button border-0" type="submit">
                        Add to cart
                      </button>
                      <button className="button signup">Buy It now</button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <p>
                        <TbGitCompare
                          className="
                        fs-5 me-2"
                        />
                        Add to compare
                      </p>
                    </div>
                    <div>
                      <p>
                        <AiOutlineHeart
                          className="
                        fs-5 me-2"
                        />
                        Add to wishlist
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column my-3">
                    <h3 className="product-heading">Shipping and Returns : </h3>
                    <p className="product-data">
                      Class vivamus dui blandit porta blandit id adipiscing sociosqu at amet massa aenean tempor
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-3">
                    <h3 className="product-heading">Product Link : </h3>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      onFocus={() => {
                        copyToClipboard(
                          'https://i5.walmartimages.com/asr/29630ff1-5735-4735-8c34-3932bdcbe346_1.b453eb875328ae7f784bacf54f5b1137.jpeg'
                        );
                      }}
                      alt="link"
                    >
                      Copy link sản phẩm
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container classes="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna pellentesque ultrices integer congue cum
                  sapien fringilla risus lacinia. Sodales scelerisque taciti ultricies fermentum natoque nulla dignissim
                  ac in. Justo risus fermentum litora aptent consequat varius quam luctus aliquet. Congue habitasse
                  tortor netus dictumst blandit ullamcorper sapien etiam tincidunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container classes="reviews-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 id="review">Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="reviews-head d-flex justify-content-between align-items-center">
                  <div>
                    <h4 className="mb-2">Customor Review</h4>
                    <div className="d-flex gap-10 align-items-center">
                      <ReactStars count={5} size={24} value={4} edit={true} activeColor="#ffd700" />
                      <p className="mb-0">Based on 2 reviews</p>
                    </div>
                  </div>
                  <div>
                    {orderedProduct && (
                      <div>
                        <a href="#review">Write a Review</a>
                      </div>
                    )}
                  </div>
                </div>
                <div id="review" className="review-form py-4">
                  <form action="" className="d-flex flex-column gap-15">
                    <h4>Write a Review</h4>
                    <div>
                      <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        cols="38"
                        rows="4"
                        placeholder="Ý kiến đóng góp"
                        className="w-100 form-control"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Gửi</button>
                    </div>
                  </form>
                </div>
                <div className="reviews">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Navdeep</h6>
                      <ReactStars count={5} size={24} value={4} edit={true} activeColor="#ffd700" />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna pellentesque ultrices integer congue
                      cum sapien fringilla risus lacinia. Sodales scelerisque taciti ultricies fermentum natoque nulla
                      dignissim ac in. Justo risus fermentum litora aptent consequat varius quam luctus aliquet. Congue
                      habitasse tortor netus dictumst blandit ullamcorper sapien etiam tincidunt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container classes="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Sản phẩm Phổ biến của chúng tôi</h3>
            </div>
            <div className="row">
              <SpecialProduct />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SingleProduct;
