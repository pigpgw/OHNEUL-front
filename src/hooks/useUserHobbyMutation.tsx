/* eslint-disable import/prefer-default-export */
import { useMutation } from 'react-query';
import fetchAddUserHobby from '../api/fetchAddUserHobby';

export const useAddUserHobbyMutation = () => {
  return useMutation(['userHobby'], fetchAddUserHobby, {
    onSuccess: () => {
      // eslint-disable-next-line no-console
      console.log('사용자 취미 등록 완료');
    },
  });
};
