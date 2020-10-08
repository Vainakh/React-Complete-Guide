import React from 'react';

const WithClass = (WrappedComponent, ClassName) => {
  return props=> (
    <div className={ClassName}>
    <WrappedComponent/>
    </div>
  )
};

export default WithClass;