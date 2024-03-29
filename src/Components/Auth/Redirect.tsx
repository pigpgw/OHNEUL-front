import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { setAuth } from 'stores/slices/userSlice';

const Redirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // console.log('state가 변경될 때 마다 호출!');
    return () => {
      // console.log('언마운트 시 호출!');
    };
  });

  return (
    <>
      {useEffect(() => {
        const fetchToken = async () => {
          try {
            navigate('/afterlogin');
            // console.log('쿠키확인', document.cookie);
            <div>asdadasdasdas</div>;
          } catch (error) {
            // alert(error);
            // console.log(' 요청 중 오류 발생:', error);
          }
        };
        fetchToken();
      }, [navigate])}
      <Wrap>로딩중</Wrap>
    </>
  );
};

const Wrap = styled.div`
  margin-top: 200px;
  min-height: 1100px;
`;

export default Redirect;
