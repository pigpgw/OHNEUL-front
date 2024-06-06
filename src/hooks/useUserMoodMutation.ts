/* eslint-disable import/prefer-default-export */
import { useMutation } from 'react-query';
import updateUserData from '../api/fetchUserMood';

const useAddUserMoodMutation = () => {
  return useMutation(['userMood'], updateUserData, {
    onSuccess: () => {
      // eslint-disable-next-line no-console
      console.log('사용자 기분 등록에 성공하였습니다..');
    },
  });
};

export default useAddUserMoodMutation;
