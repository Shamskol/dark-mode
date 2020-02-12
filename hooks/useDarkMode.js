import { useState, useEffect } from 'react';
import useLocalStorage from "./useLocalStorage";



export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false)
    const toggleDarkMode = evt => {
      setDarkMode(!darkMode)
    }
    return [darkMode, toggleDarkMode]     
}