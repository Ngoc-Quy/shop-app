import React from 'react';
import {Link} from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import Meta from '../components/Meta';
import CustomInput from '../components/CustomInput';

function Login() {
  return (
    <>
      <Meta title={'Đăng nhập'} />
      <BreadCrumb title="Đăng nhập" />

      <Container classes="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center">Đăng nhập</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <CustomInput type="text" placeholder="Email" name="email" />
                  <CustomInput type="password" placeholder="Password" name="password" />
                  <div>
                    <Link to="/forgot-password">Quên mật khẩu?</Link>
                    <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                      <button className="button border-0" type="submit">
                        Đăng nhập
                      </button>
                      <Link to="/signup" className="button signup">
                        Đăng ký
                      </Link>
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

export default Login;
