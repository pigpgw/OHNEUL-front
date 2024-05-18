import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import phrase from 'assets/images/appCatchphrase.png';

const PhraseContainer = styled.div``;
const Redirect: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      try {
        if (document.cookie) {
          navigate('/');
        }
      } catch (error) {
        alert('로그인에 실패했습니다.');
      }
    };
    fetchToken();
  }, [dispatch, navigate]);

  return (
    <>
      <PhraseContainer>
        <img src={phrase} alt="phrase"></img>
      </PhraseContainer>
    </>
  );
};

export default Redirect;
