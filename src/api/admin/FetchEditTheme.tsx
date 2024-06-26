/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

export const FetchAddTheme = async (selectedTheme: string) => {
  const fetchTheme = await axios.post('http://localhost:4000/themes/join ', {
    theme: selectedTheme,
  });
  return fetchTheme;
};

export const FetchDelTheme = async (selectedtheme: any) => {
  const fetchTheme = await axios.delete(
    `http://localhost:4000/themes/${selectedtheme}`,
  );
  return fetchTheme;
};
