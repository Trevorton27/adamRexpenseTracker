import React from 'react';
import {
  Modal,
  Button,
  ToggleButtonGroup,
  ToggleButton
} from 'react-bootstrap';

const SettingsModal = ({
  show,
  setShow,

  saveLocalStorage,
  setSaveLocalStorage,
  isDarkMode,
  setIsDarkMode
}) => {
  // const themeValues = [
  //   { name: 'Light Mode', value: '0' },
  //   { name: 'Dark Mode', value: '1' }
  // ];
  // const storageValues = [
  //   { name: 'Save Expenses', value: '0' },
  //   { name: 'No Save', value: '1' }
  // ];

  // function themeChange(e) {
  //   setTheme(e.currentTarget.value);
  // }

  // function storageChange(e) {
  //   setSaveLocalStorage(e.currentTarget.value);
  // }

  const handleClose = () => setShow(false);

  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ToggleButtonGroup
          name='save-theme-mode-buttons'
          onChange={(value) => setIsDarkMode(value)}
        >
          <ToggleButton
            className='radiobuttons'
            variant='link'
            type='radio'
            name='dark-mode'
            checked='dark-mode'
            value={true}
          >
            Dark Mode
          </ToggleButton>
          <ToggleButton
            className='radiobuttons'
            variant='link'
            type='radio'
            name='light-mode'
            checked='light-mode'
            value={false}
          >
            Light Mode
          </ToggleButton>
        </ToggleButtonGroup>

        <div>
          <ToggleButtonGroup
            name='save-expenses-toggle-buttons'
            onChange={(value) => setSaveLocalStorage(value)}
          >
            <ToggleButton
              className='radiobuttons'
              variant='link'
              type='radio'
              name='save'
              value={true}
            >
              Save
            </ToggleButton>
            <ToggleButton
              className='radiobuttons'
              variant='link'
              type='radio'
              name='no-save'
              value={false}
            >
              No Save
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='primary' onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SettingsModal;
