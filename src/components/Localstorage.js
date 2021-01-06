import React, { useEffect } from 'react';

const LocalStorage = (props) => {
  const savedStorageItems = JSON.parse(localStorage.getItem('expenses')) || [];
  const savedTheme = JSON.parse(localStorage.getItem('theme'));
  const save = JSON.parse(localStorage.getItem('expenses'));

  useEffect(() => {
    switch (save) {
      //Do not save in local storage
      case '1':
        props.setSave('1');
        break;
      //Save in local storage
      case '0':
        props.setSave('0');
        break;
      default:
    }

    switch (savedTheme) {
      //Dark Theme
      case '1':
        if (JSON.parse(localStorage.getItem('save')) === '0') {
          props.setTheme('1');
        }
        break;
      //Light Theme
      case '0':
        if (JSON.parse(localStorage.getItem('save')) === '0') {
          props.setTheme('0');
        }
        break;
      default:
        return;
    }

    if (savedStorageItems.length > 0) {
      if (JSON.parse(localStorage.getItem('save')) === '0') {
        props.setExpenses(JSON.parse(localStorage.getItem('expenses')));
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(props.theme));
    localStorage.setItem('expenses', JSON.stringify(props.expenses));
    localStorage.setItem('save', JSON.stringify(props.saveLocalStorage));
  }, [props.expenses, props.saveLocalStorage, props.theme]);

  return null;
};

export default LocalStorage;
