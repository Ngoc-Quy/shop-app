import React from 'react';
import {Link} from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import Meta from '../components/Meta';

function Forgotpassword() {
  return (
    <>
      <Meta title={'Quên mật khẩu'} />
      <BreadCrumb title="Quên mật khẩu" />
      <Container classes="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Đặt lại mật khẩu của bạn</h3>
                <p className="text-center mt-2 mb-3">Chúng tôi sẽ gửi mật khẩu mới qua Email của bạn</p>
                <form action="" className="d-flex flex-column gap-15">
                  <CustomInput type="text" placeholder="Email" name="email" />
                  <div>
                    <div className="mt-3 d-flex flex-column justify-content-center align-items-center gap-15">
                      <button type="submit" className="button border-0">
                        Xác nhận
                      </button>
                      <Link to="/login">Huỷ</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
export default Forgotpassword;
