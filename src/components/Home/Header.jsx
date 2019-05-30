import React from 'react';

const Header = () => {
  return (
    <div className="header-container">
      <button type="button" className="header-who">Who?</button>
      <div>
        <h1>Queertrip</h1>
        <h3>Helping queerdos travel queerer</h3>
      </div>
      <button type="button" className="header-why">Why?</button>
    </div>
  );
};

export default Header;
