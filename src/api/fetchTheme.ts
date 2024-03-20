/* eslint-disable import/prefer-default-export */
import axios from 'axios';

interface Themes {
  theme_id: number;
  theme: string;
}

export const fetchGetThemes = async (): Promise<Themes[]> => {
  const response = await axios.get('http://localhost:3000/theme');
  console.log('check theme', response.data);
  return response.data;
};
