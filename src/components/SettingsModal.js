import React from 'react';
import { Modal, Button, ButtonGroup, ToggleButton } from 'react-bootstrap';

const SettingsModal = ({
  show,
  setShow,
  theme,
  setTheme,
  saveLocalStorage,
  setSaveLocalStorage
}) => {
  const themeValues = [
    { name: 'Light Mode', value: '0' },
    { name: 'Dark Mode', value: '1' }
  ];
  const storageValues = [
    { name: 'Save Expenses', value: '0' },
    { name: 'No Save', value: '1' }
  ];

  function themeChange(e) {
    setTheme(e.currentTarget.value);
  }

  function storageChange(e) {
    setSaveLocalStorage(e.currentTarget.value);
  }

  const handleClose = () => setShow(false);

  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ButtonGroup>
          {themeValues.map((themeValue, idx1) => (
            <ToggleButton
              className='radiobuttons'
              variant='link'
              key={idx1}
              type='radio'
              name='radio'
              value={themeValue.value}
              checked={theme === themeValue.value}
              onChange={themeChange}
            >
              {themeValue.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
        <div>
          <ButtonGroup>
            {storageValues.map((storageValue, idx2) => (
              <ToggleButton
                className='radiobuttons'
                variant='link'
                key={idx2}
                type='radio'
                name='storage'
                value={storageValue.value}
                checked={saveLocalStorage === storageValue.value}
                onChange={storageChange}
              >
                {storageValue.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
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
