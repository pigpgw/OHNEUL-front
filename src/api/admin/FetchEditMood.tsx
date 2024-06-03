import axios from 'axios';

export const FetchAddMood = async () => {
  const fetchMood = await axios.post('http://localhost:4000/moods/join ');
  return fetchMood;
};

export const FetchDelMood = async (selectedMood: unknown) => {
  const fetchMood = await axios.delete(
    `http://localhost:4000/moods/${selectedMood}`,
  );
  return fetchMood;
};
