import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

const Wrap = styled.div`
  margin-top: 200px;
  min-height: 1100px;
`;

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
      <Wrap>로딩중</Wrap>
    </>
  );
};

export default Redirect;
