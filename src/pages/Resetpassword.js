import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

function Resetpassword() {
  return (
    <>
      <Meta title={'Reset password'} />
      <BreadCrumb title="Reset password" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center">Đặt lại mật khẩu</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input type="password" placeholder="Mật khẩu" name="password" className="form-control" />
                  </div>
                  <div className="mt-1">
                    <input type="password" placeholder="Nhập lại mật khẩu" name="password" className="form-control" />
                  </div>
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
      </div>
    </>
  );
}

export default Resetpassword;
