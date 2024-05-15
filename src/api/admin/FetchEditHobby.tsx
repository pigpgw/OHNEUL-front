import React from 'react';
import axios from 'axios';

export const FetchDelHobby = async (selectedHobbyId: any) => {
  const response = await axios.delete(
    `http://localhost:4000/hobbies/${selectedHobbyId}`,
  );
  return response.data;
};

export const FetchAddHobby = async (hobby: any) => {
  const fetchAddHobby = await axios.post(`http://localhost:4000/hobbies/join`, {
    hobby,
  });
  return fetchAddHobby;
};
