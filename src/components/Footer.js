import React from 'react';
import newsletter from '../images/newsletter.png';
import {Link} from 'react-router-dom';
import {BsSearch, BsLinkedin, BsGithub, BsInstagram, BsYoutube} from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="text-white mb-0">Đăng ký nhận bản tin</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Liên hệ chúng tôi</h4>
              <div>
                <address className="text-white fs-6">
                  Địa chỉ : Thôn Quý Hải, Long Hải <br /> Phú Quý, Bình Thuận <br />
                  pinCode: 11111
                </address>
                <a href="tel:+84 981275991" className="text-white mt-3 d-block mb-3">
                  +84 981275991
                </a>
                <a href="mailto:phamngocquydh23g@gmail.com" className="text-white mt-3 d-block mb-3">
                  phamngocquydh23g@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="https://linkedin.com" alt="Linkedin">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-white" href="https://instagram.com" alt="Instagram">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="text-white" href="https://github.com" alt="Github">
                    <BsGithub className="fs-4" />
                  </a>
                  <a className="text-white" href="https://youtube.com" alt="Youtube">
                    <BsYoutube className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Thông tin</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Chính sách bảo mật
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Chính sách hoàn tiền
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  Chính sách vận chuyển
                </Link>
                <Link to="/term-conditions" className="text-white py-2 mb-1">
                  Điều khoản
                </Link>
                <Link to="/blogs" className="text-white py-2 mb-1">
                  Bải viết
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Tài khoản</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Về chúng tôi</Link>
                <Link className="text-white py-2 mb-1">Fag</Link>
                <Link className="text-white py-2 mb-1">Liên hệ</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Đường dẫn nhanh</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptop</Link>
                <Link className="text-white py-2 mb-1">Tai nghe</Link>
                <Link className="text-white py-2 mb-1">Máy tính bản</Link>
                <Link className="text-white py-2 mb-1">Đồng hồ</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Được phát triển bởi Mr.Quý
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
