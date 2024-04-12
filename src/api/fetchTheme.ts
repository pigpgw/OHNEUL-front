/* eslint-disable import/prefer-default-export */
import axios from 'axios';

interface Themes {
  theme_id: number;
  theme: string;
}

export const fetchGetThemes = async (): Promise<Themes[]> => {
  const response = await axios.get(`http://3.91.102.205:4000/themes`);
  return response.data;
};
