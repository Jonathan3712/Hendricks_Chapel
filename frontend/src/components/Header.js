import React from 'react';
// import React, { useState } from 'react';

import './Style.css';  // Make sure to import the CSS file

function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

  return (
    <header className="head_of">
      <div className="header-content">
        <h1>Welcome to the Bridge - Evangelical Chaplaincy Hendricks Chapel</h1><br></br>
        <h2>Syracuse University</h2>
        <hr className='bold1'></hr>
      </div>
    </header>
  );
}

export default Header;
