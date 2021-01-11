import React from 'react';
import {
  Modal,
  Button,
  ToggleButton,
  ToggleButtonGroup
} from 'react-bootstrap';

const SettingsModal = ({
  show,
  setShow,
  isDarkMode,
  setIsDarkMode,
  saveLocalStorage,
  setSaveLocalStorage
}) => {
  console.log(' settings modal props.show ', show);
  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ToggleButtonGroup
          name='save-theme-mode-buttons'
          onChange={(value) => setIsDarkMode(value === 'dark-mode')}
          value={isDarkMode ? 'dark-mode' : 'light-mode'}
        >
          <ToggleButton
            className='radiobuttons'
            variant='link'
            type='radio'
            name='dark-mode'
            checked='dark-mode'
            value='dark-mode'
          >
            Dark Mode
          </ToggleButton>
          <ToggleButton
            className='radiobuttons'
            variant='link'
            type='radio'
            name='light-mode'
            checked='light-mode'
            value='light-mode'
          >
            Light Mode
          </ToggleButton>
        </ToggleButtonGroup>
        <div>
          <ToggleButtonGroup
            name='save-expenses-toggle-buttons'
            onChange={(value) => setSaveLocalStorage(value === 'save')}
            value={saveLocalStorage ? 'save' : 'no-save'}
          >
            <ToggleButton
              className='radiobuttons'
              variant='link'
              type='radio'
              name='save'
              value='save'
            >
              Save
            </ToggleButton>
            <ToggleButton
              className='radiobuttons'
              variant='link'
              type='radio'
              name='no-save'
              value='no-save'
            >
              No Save
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant='primary'
          onClick={() => {
            setShow(false);
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SettingsModal;
