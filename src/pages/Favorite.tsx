import React from 'react';
import { useNavigate } from 'react-router-dom';

function Favorite() {
  const navigate = useNavigate();

  // const navigateFavorite = () => {
  //     navigate("/favorite")
  // }
  return (
    <>
      <p>favorite page입니다.</p>
    </>
  );
}

export default Favorite;
