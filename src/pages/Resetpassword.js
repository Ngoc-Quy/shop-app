import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import Meta from '../components/Meta';
import CustomInput from '../components/CustomInput';

function Resetpassword() {
  return (
    <>
      <Meta title={'Đổi mật khẩu'} />
      <BreadCrumb title="Đổi mật khẩu" />
      <Container classes="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center">Đặt lại mật khẩu</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <CustomInput type="password" placeholder="Mật khẩu" name="password" />
                  <CustomInput type="password" placeholder="Nhập lại mật khẩu" name="password" />
                  <div>
                    <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                      <button className="button border-0">Xác nhận</button>
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

export default Resetpassword;
