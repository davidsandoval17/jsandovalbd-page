import { dark, light } from '../mode';
import { setLocalStorage } from '../../utils';
import { useEffect, useState } from 'react';
import { DefaultTheme } from 'styled-components';

const getSystemTheme = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? dark
    : light;
};

const useToggleTheme = () => {
  const [theme, setTheme] = useState<DefaultTheme>(getSystemTheme());

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setTheme(mediaQuery.matches ? dark : light);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const currentTheme = theme.mode === 'light' ? dark : light;
    setLocalStorage('theme', currentTheme);
    setTheme(currentTheme);
  };

  return {
    isThemeLight: theme.mode === 'light',
    theme,
    toggleTheme,
    setTheme,
  };
};

export default useToggleTheme;
