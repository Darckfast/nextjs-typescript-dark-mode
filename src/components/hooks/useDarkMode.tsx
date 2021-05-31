import React from 'react'
import { useEffect, useState } from 'react';

export const useDarkMode = (): [string, () => void] => {
  const [theme, setTheme] = useState('light');

  const setMode = mode => {
    localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  const themeToggler = (): void => {
    setMode((mode: string) => mode === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    localTheme && setTheme(localTheme)
  }, [])

  return [theme, themeToggler]
}
