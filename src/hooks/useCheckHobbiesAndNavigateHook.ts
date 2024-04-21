import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchGetOneUserHobby } from 'api/fetchGetOneUserHobby';

const useCheckHobbiesAndNavigate = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataAndNavigate = async () => {
      try {
        const user = await fetchGetOneUserHobby();
        if (Object.keys(user).length > 0) {
          navigate('/mood');
        }
      } catch (error) {
        console.error('유저의 취미 등록여부 확인 실패', error);
      }
    };

    fetchDataAndNavigate();
  }, [navigate]);
};

export default useCheckHobbiesAndNavigate;