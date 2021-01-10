import React, { useState, useEffect } from 'react';
import './CSS/App.css';
import InputForm from './components/InputForm';
import Navbar from './components/Navbar/Navbar';
import SettingsModal from './components/SettingsModal';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [show, setShow] = useState(false);
  const [saveLocalStorage, setSaveLocalStorage] = useState(true);

  useEffect(() => {
    const isSavingToLocalStorage =
      JSON.parse(localStorage.getItem('save')) || false;
    setSaveLocalStorage(isSavingToLocalStorage);
    const isDarkMode = JSON.parse(localStorage.getItem('theme')) || false;
    setIsDarkMode(isDarkMode);
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

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <Navbar show={show} setShow={setShow} />
      <header>
        <h1 className='display-5'>Expense Tracker</h1>
      </header>
      <InputForm expenses={expenses} setExpenses={setExpenses} />
      <SettingsModal
        show={show}
        setShow={setShow}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        saveLocalStorage={saveLocalStorage}
        setSaveLocalStorage={setSaveLocalStorage}
      />
    </div>
  );
}

export default App;
