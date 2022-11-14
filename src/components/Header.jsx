import React from 'react';
const {getDataFromDB} = require('../actions/getDBactions')

const Header = ({setLoad}) => {

  const headerHandler = (event) => {
    setLoad(true)
    getDataFromDB()
      .then((res)=>{
        setLoad(false)
      })
  }

  return (
    <nav className='green darken-3'>
      <div className="container">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <a className="waves-effect waves-light btn" onClick={headerHandler}>button</a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
