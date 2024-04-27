import React from 'react';
import axios from 'axios';

export const FetchDelHobby = async (selectedHobby: any) => {
  const fetchDelHobby = await axios.delete(
    `http://localhost:4000/hobbies/${selectedHobby}`,
  );
  return fetchDelHobby;
};

export const FetchAddHobby = async () => {
  const fetchAddHobby = await axios.post(`http://localhost:4000/hobbies`);
  return fetchAddHobby;
};
export const FetchUpdateHobby = async (selectedHobby: any) => {
  const fetchDelHobby = await axios.put(
    `http://localhost:4000/hobbies/${selectedHobby}`,
  );
  return fetchDelHobby;
};
