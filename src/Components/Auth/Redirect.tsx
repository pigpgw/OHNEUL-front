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
            navigate('/');
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

// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import axios from 'axios';
// import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
// import { useDispatch } from 'react-redux';
// import { setAuth } from 'stores/slices/userSlice';

// const Wrap = styled.div`
//   margin-top: 200px;
//   min-height: 1100px;
// `;

// // const fetchToken = async () => {
// //   const response = await axios.get('/user');
// //   return response.data;
// // };

// // const {
// //   data: userData,
// //   isLoading,
// //   isError,
// // } = useQuery('userData', fetchToken);
// // if (isLoading) return <Wrap>로딩중</Wrap>;
// // if (isError) {
// //   alert('싪ㅍ패');
// //   console.error(' 에러');

// //   return <Wrap>error</Wrap>;
// // }
// // const { username, AccessToken } = userData;
// // dispatch(setAuth({ username, AccessToken }));
// // return null;
// // useEffect(() => {
// //   const fetchToken = async () => {
// //     try {
// //       const response = await axios.get('/user');
// //       // 로컬스토리지 사용?
// //       const { username, AccessToken, refreshToken } = response.data;
// //       dispatch(setAuth({ username, AccessToken, refreshToken }));
// //       navigate('/');
// //     } catch (error) {
// //       alert('로그인에 실패했습니다.');
// //       console.error('로그인 요청 중 오류 발생:', error);
// //     }
// //   };
// //   fetchToken();
// // }, [dispatch, navigate]);

// const Redirect: React.FC = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const isAuth = document.cookie;
//   useEffect(() => {
//     // console.log('state가 변경될 때 마다 호출!');
//     return () => {
//       // console.log('언마운트 시 호출!');
//     };
//   });
//   // const navigate = useNavigate();
//   // useEffect(() => {
//   //   const checkAuth = async () => {
//   //     if (isAuth) {
//   //       navigate('/home');
//   //     } else;
//   //     alert('Please login');
//   //     // navigate('/');
//   //   };
//   //   checkAuth();
//   // }, [navigate]);

//   // useEffect(() => {
//   //   const fetchToken = async () => {
//   //     try {
//   //       navigate('/home');
//   //       console.log('쿠키확인', document.cookie);
//   //       // localStorage.setItem('쿠키', document.cookie);
//   //     } catch (error) {
//   //       alert(error);
//   //       console.log(' 요청 중 오류 발생:', error);
//   //     }
//   //   };
//   //   fetchToken();
//   // }, [navigate]);

//   return (
//     <>
//       {useEffect(() => {
//         const fetchToken = async () => {
//           try {
//             navigate('/afterlogin');
//             // console.log('쿠키확인', document.cookie);
//             <div>asdadasdasdas</div>;
//           } catch (error) {
//             // alert(error);
//             // console.log(' 요청 중 오류 발생:', error);
//           }
//         };
//         fetchToken();
//       }, [navigate])}
//       <Wrap>로딩중</Wrap>
//     </>
//   );
// };

// export default Redirect;
