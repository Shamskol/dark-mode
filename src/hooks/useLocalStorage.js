import {useState} from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setstoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  

  const setValue = value => {
    setstoredValue(value);
    window.localStorage.setItem(key, stringify(value));
  };
  return [storedValue, setValue];

};
