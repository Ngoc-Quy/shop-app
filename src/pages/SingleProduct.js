import React, {useState} from 'react';
import ReactStars from 'react-rating-stars-component';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import SpecialProduct from '../components/SpecialProduct';

function SingleProduct() {
  const [orderedProduct, setorderedProduct] = useState(true);

  return (
    <div>
      <Meta title={'Single Product'} />
      <BreadCrumb title="Single Product" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
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
      </div>
      <section className="reviews-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3>Reviews</h3>
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
                        <a className="text-dark text-decoration-underline" href="https://dsa">
                          Write a Review
                        </a>
                      </div>
                    )}
                  </div>
                </div>
                <div className="review-form py-4">
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
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
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
      </section>
    </div>
  );
}

export default SingleProduct;
