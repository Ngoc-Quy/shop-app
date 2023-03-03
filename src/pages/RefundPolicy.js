import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

function RefundPolicy() {
  return (
    <div>
      <Meta title={'Refund Policy'} />
      <BreadCrumb title="Refund Policy" />
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

export default RefundPolicy;
