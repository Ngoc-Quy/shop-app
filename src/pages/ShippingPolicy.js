import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

function ShippingPolicy() {
  return (
    <div>
      <Meta title={'Shipping Policy'} />
      <BreadCrumb title="Shipping Policy" />
      <section className="policy-wrapper py-5 home-warpper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ShippingPolicy;
