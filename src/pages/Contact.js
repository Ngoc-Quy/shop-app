import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai';
import {BiInfoCircle, BiPhoneCall} from 'react-icons/bi';
import Container from '../components/Container';

const Contact = () => {
  return (
    <>
      <Meta title={'Liên hệ với chúng tôi'} />
      <BreadCrumb title="Liên hệ với chúng tôi" />
      <Container classes="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15689.873546435232!2d108.93156231648642!3d10.542472575272916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3177b1b0f1c442f3%3A0xbf1c229d073520e6!2zTG9uZyBI4bqjaSwgQsOsbmggVGh14bqtbiwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1677833784688!5m2!1svi!2s"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Liên hệ</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input type="text" className="form-control" placeholder="Tên" />
                    </div>
                    <div>
                      <input type="text" className="form-control" placeholder="Địa chỉ Gmail" />
                    </div>
                    <div>
                      <input type="text" className="form-control" placeholder="Số điện thoại" />
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
                    <div>
                      <button className="button border-0">Xác nhận</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Liên lạc với chúng tôi</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5" />
                        <address className="mb-0">Địa chỉ: Long Hải, Phú Quý, Bình Thuận</address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiPhoneCall className="fs-5" />
                        <a href="tel:+84 981275991">+84 981275991</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineMail className="fs-5" />
                        <a href="mailto:phamngocquydh23g@gmail.com">phamngocquydh23g@gmail.com</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiInfoCircle className="fs-5" />
                        <p className="mb-0">Thứ hai - Thứ sáu 10AM - 8PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
