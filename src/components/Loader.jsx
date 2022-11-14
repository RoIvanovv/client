import React from 'react';
import './Components.scss'

const Loader = () => {
  return (
    <div className='loadding'>
      <div className="preloader-wrapper active">
        <div className="spinner-layer spinner-green-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Loader;
