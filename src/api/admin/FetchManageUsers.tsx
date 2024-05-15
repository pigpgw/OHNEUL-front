import axios from 'axios';

const delUser = async (selectedUser: any) => {
  const fetchUser = await axios.delete(
    `http://localhost:4000/users/${selectedUser}`,
  );
  return fetchUser;
};

export default delUser;
