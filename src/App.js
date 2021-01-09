import React, { useState, useEffect } from 'react';
import './CSS/App.css';
import InputForm from './components/InputForm';
import Navbar from './components/Navbar/Navbar';
import SettingsModal from './components/SettingsModal';

let root = document.querySelector(':root');

function App() {
  const [expenses, setExpenses] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [show, setShow] = useState(false);
  const [saveLocalStorage, setSaveLocalStorage] = useState(false);

  useEffect(() => {
    const isSavingToLocalStorage =
      JSON.parse(localStorage.getItem('save')) || false;
    setSaveLocalStorage(isSavingToLocalStorage);

    const isDark = JSON.parse(localStorage.getItem('theme')) || false;
    setIsDarkMode(isDark);

    const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(savedExpenses);
  }, []);

  useEffect(() => {
    if (saveLocalStorage === true) {
      localStorage.setItem('expenses', JSON.stringify(expenses));
    }
  }, [expenses, saveLocalStorage]);

  useEffect(() => {
    if (saveLocalStorage === true) {
      localStorage.setItem('theme', JSON.stringify(isDarkMode));
    }
  }, [isDarkMode, saveLocalStorage]);

  useEffect(() => {
    if (saveLocalStorage === true) {
      localStorage.setItem('save', JSON.stringify(saveLocalStorage));
    }
  }, [saveLocalStorage]);

  useEffect(() => {
    if (isDarkMode === true) {
      //Dark Mode
      root.style.setProperty('--theme-color-navbar', '#3a005b');
      root.style.setProperty('--theme-color-navbar-text', '#ffffff');
      root.style.setProperty('--theme-color-navbar-burger', '#ffffff');
      //Text
      root.style.setProperty('--app-theme-color-text', '#ffffff');
      //Gradient Background
      root.style.setProperty('--app-theme-color-back', '#383838');
      root.style.setProperty('--app-theme-color-back-secondary', '#383838');
      //Table
      root.style.setProperty('--app-theme-color-table-row-1', '#ababab');
      root.style.setProperty('--app-theme-color-table-row-2', '#2d2d2d');
      //Buttons
      root.style.setProperty('--app-theme-color-table-button', '#ddb244');
    } else if (isDarkMode === false) {
      //Light Mode
      root.style.setProperty('--theme-color-navbar', '#96151D');
      root.style.setProperty('--theme-color-navbar-text', '#000000');
      root.style.setProperty('--theme-color-navbar-burger', '#000000');
      //Text
      root.style.setProperty('--app-theme-color-text', '#3f3f3f');
      //Gradient Background
      root.style.setProperty('--app-theme-color-back', '#ededed');
      root.style.setProperty('--app-theme-color-back-secondary', '#ededed');
      //Table
      root.style.setProperty('--app-theme-color-table-row-1', '#EAEAEA');
      root.style.setProperty('--app-theme-color-table-row-2', '#F9FAFA');
      //Buttons
      root.style.setProperty('--app-theme-color-table-button', '#22A1DB');
    }
  }, [isDarkMode]);
  console.log('saveLocalStorage ', saveLocalStorage);
  console.log('isDarkMode ', isDarkMode);
  return (
    <div className='App'>
      <Navbar show={show} setShow={setShow} />
      <header>
        <h1 className='display-5'>Expense Tracker</h1>
      </header>
      <InputForm
        expenses={expenses}
        setExpenses={setExpenses}
        /* saveLocalStorage={saveLocalStorage}
        setSaveLocalStorage={setSaveLocalStorage}*/
      />
      <SettingsModal
        show={show}
        setShow={setShow}
        setIsDarkMode={setIsDarkMode}
        saveLocalStorage={saveLocalStorage}
        setSaveLocalStorage={setSaveLocalStorage}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}

export default App;
