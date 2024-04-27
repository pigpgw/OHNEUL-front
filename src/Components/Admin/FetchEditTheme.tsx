import React from 'react';
import axios from 'axios';

export const FetchAddTheme = async () => {
  const fetchTheme = await axios.post('http://localhost:4000/themes/join ');
  return fetchTheme;
};
export const FetchUpdateTheme = async (selectedtheme: any) => {
  const fetchTheme = await axios.put(
    `http://localhost:4000/themes/${selectedtheme}`,
  );
  return fetchTheme;
};
export const FetchDelTheme = async (selectedtheme: any) => {
  const fetchTheme = await axios.delete(
    `http://localhost:4000/themes/${selectedtheme}`,
  );
  return fetchTheme;
};
