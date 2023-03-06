import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import Meta from '../components/Meta';

function ShippingPolicy() {
  return (
    <div>
      <Meta title={'Chính sách vận chuyển'} />
      <BreadCrumb title="Chính sách vận chuyển" />
      <Container classes="policy-wrapper py-5 home-warpper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy">
                <h3>Chúng tôi đang phát triển và bổ sung sau ạ :)) </h3>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ShippingPolicy;
