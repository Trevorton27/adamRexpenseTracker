import React from 'react';
import './Navbar.css';

const Navbar = ({ setShow, show }) => {
  console.log(' Navbar props ', setShow);
  //   const showModalHandler = () => {
  //     console.log('im trying to open the modal.');
  //     props.setShow(true);
  //   };

  return (
    <nav
      className='navbar navbar-expand-xl'
      id='settingsMenuItem'
      onClick={() => {
        setShow(true);
      }}
    >
      Settings{' '}
    </nav>
  );
};

export default Navbar;
