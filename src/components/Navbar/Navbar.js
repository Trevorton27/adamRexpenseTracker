import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
  const showModalHandler = () => {
    props.setShow(true);
  };

  return (
    <nav className='navbar navbar-expand-xl'>
      <h2 onClick={showModalHandler} className='settingsMenuItem'>
        Settings
      </h2>
    </nav>
  );
};

export default Navbar;
