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
        console.error('Error fetching user data:', error);
      }
    };

    fetchDataAndNavigate();
  }, [navigate]);
};

export default useCheckHobbiesAndNavigate;