import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
  const showModalHandler = () => {
    console.log('im trying to open the modal.');
    props.setShow(true);
  };

  return (
    <nav className='navbar navbar-expand-xl' onClick={showModalHandler}>
      Settings{' '}
    </nav>
  );
};

export default Navbar;
