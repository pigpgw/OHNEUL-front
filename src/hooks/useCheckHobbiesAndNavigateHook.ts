import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchGetOneUser } from 'api/fetchOneUser';

const useCheckHobbiesAndNavigate = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataAndNavigate = async () => {
      try {
        const user = await fetchGetOneUser();
        const hasHobbies = user.hobbies.length > 0;
        if (hasHobbies) {
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
