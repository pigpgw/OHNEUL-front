import React from 'react';
import axios from 'axios';

export const delUser = async (selectedUser: any) => {
  const fetchUser = await axios.delete(
    `http://localhost:4000/users/${selectedUser}`,
  );
  return fetchUser;
};
