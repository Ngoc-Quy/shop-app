import React from 'react';

function Container({classes, children}) {
  return (
    <>
      <section className={classes}>{children}</section>
    </>
  );
}

export default Container;
