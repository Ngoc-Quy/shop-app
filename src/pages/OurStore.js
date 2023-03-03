import React, {useState} from 'react';
import ReactStars from 'react-rating-stars-component';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';

const Ourstore = () => {
  const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta title={'Our Store'} />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Điều hướng shop</h3>
                <div>
                  <ul>
                    <li>Watch</li>
                    <li>Tivi</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>

              <div className="filter-card mb-3">
                <h3 className="filter-title">Lọc</h3>

                <div>
                  <h5 className="sub-title">Availablity</h5>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="" />
                    <label className="form-check-label" htmlFor="">
                      In Stock (1)
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="" />
                    <label className="form-check-label" htmlFor="">
                      Out of Stock (0)
                    </label>
                  </div>

                  <h5 className="sub-title">Price</h5>

                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="floatingInput" placeholder="from" />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating">
                      <input type="email" className="form-control" id="floatingInput" placeholder="to" />
                      <label htmlFor="floatingInput">To</label>
                    </div>
                  </div>

                  <h5 className="sub-title">Color</h5>

                  <div>
                    <ul className="color ps-0">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>

                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="color-1" />
                      <label className="form-check-label" htmlFor="color-1">
                        S (1)
                      </label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="color-2" />
                      <label className="form-check-label" htmlFor="color-2">
                        M (2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="filter-card mb-3">
                <h3 className="filter-title">Tên sản phẩm</h3>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Headphone</span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Mobile</span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Wire</span>
                </div>
              </div>

              <div className="filter-card mb-3">
                <h3 className="filter-title">Sản phẩm ngẫu nhiên</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img src="images/watch.jpg" className="img-fluid" alt="watch" />
                    </div>
                    <div className="w-50">
                      <h5 className="">Kids headphones bulk 10 pack multi colored for students</h5>
                      <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
                      <b>$ 300</b>
                    </div>
                  </div>

                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img src="images/watch.jpg" className="img-fluid" alt="watch" />
                    </div>
                    <div className="w-50">
                      <h5 className="">Kids headphones bulk 10 pack multi colored for students</h5>
                      <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
                      <b>$ 300</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-9">
              <div className="filter-sort-grid">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block" style={{width: '100px'}}>
                      Sort By:
                    </p>
                    <select name="" className="form-control form-select" id="">
                      <option value="manual">Featured</option>
                      <option value="title-selling" selected="selected">
                        Best Selling
                      </option>
                      <option value="title-ascending">Alphabetically, A-Z</option>
                      <option value="title-desconding">Alphabetically, Z-A</option>
                      <option value="price-selling">Price, low to high</option>
                      <option value="price-selling">Price, high to low</option>
                      <option value="created-selling">Date, old to new</option>
                      <option value="created-selling">Date, new to old</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">21 products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        className="d-block img-fluid"
                        src="images/gr4.svg"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        className="d-block img-fluid"
                        src="images/gr3.svg"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        className="d-block img-fluid"
                        src="images/gr2.svg"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        className="d-block img-fluid"
                        src="images/gr.svg"
                        alt="grid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourstore;
