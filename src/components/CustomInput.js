import React from 'react';

function CustomInput({type, name, placeholder, classname}) {
  return (
    <>
      <div>
        <input type={type} placeholder={placeholder} name={name} className={`form-control ${classname}`} />
      </div>
    </>
  );
}

export default CustomInput;
