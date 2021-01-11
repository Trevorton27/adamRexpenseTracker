import React from 'react';
import './Navbar.css';

const Navbar = ({ setShow, show }) => {
  console.log(' Navbar props ', setShow, show);
  //   const showModalHandler = () => {
  //     console.log('im trying to open the modal.');
  //     props.setShow(true);
  //   };

  return (
    <nav
      className='navbar navbar-expand-xl'
      onClick={() => {
        setShow(true);
      }}
    >
      Settings{' '}
    </nav>
  );
};

export default Navbar;
