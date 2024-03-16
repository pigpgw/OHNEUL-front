import React from 'react';
import { useNavigate } from 'react-router-dom';

function Mood() {
  const navigate = useNavigate();

  const navigateMood = () => {
      navigate("/mood")
  }
  return (
    <>
      <p>Mood page입니다.</p>
      <button onClick={navigateMood}></button>
    </>
  );
}

export default Mood;
