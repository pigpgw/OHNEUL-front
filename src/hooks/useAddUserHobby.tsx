/* eslint-disable import/prefer-default-export */
import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

interface UserHobby {
  user_id: number;
  hobby_id: number[];
}

interface AddUserHobbyResponse {
  message: string;
  data: UserHobby;
}

const addUserHobby = (userHobby: UserHobby): Promise<AddUserHobbyResponse> => {
  return axios.post('http://localhost:3000/user-hobby', userHobby);
  // return axios.post('http://localhost:3000/user-hobby/join')
};

export const useAddUserHobby = () => {
    const queryClient = useQueryClient()
    return useMutation(addUserHobby,{
        onSuccess: () => {
            console.log('사용자 취미 등록 완료')
        }
    })
}