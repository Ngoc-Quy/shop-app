import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import Meta from '../components/Meta';
import CustomInput from '../components/CustomInput';

function Signup() {
  return (
    <div>
      <Meta title={'Đăng ký'} />
      <BreadCrumb title="Đăng ký" />
      <Container classes="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center">Đăng ký</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <CustomInput type="text" placeholder="Tên" name="name" />
                  <CustomInput type="text" placeholder="Số điện thoại" name="mobile" />
                  <CustomInput type="email" placeholder="Địa chỉ email" name="email" />
                  <CustomInput type="password" placeholder="Mật khẩu" name="password" />
                  <CustomInput type="password" placeholder="Nhập lại mật khẩu" name="password" />

                  <div>
                    <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                      <button className="button border-0">Đăng ký</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Signup;
