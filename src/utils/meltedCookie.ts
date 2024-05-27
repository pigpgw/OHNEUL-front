import { useNavigate } from 'react-router-dom';

const meltedCookie = () => {
  const cookies = document.cookie.split('; ');
  const userInfo: { [key in string]: string } = cookies.reduce(
    (acc, cookie) => {
      const [key, value] = cookie.split('=');
      const keyType: string = key;
      const valueType: string = value;
      (acc as Record<string, string>)[keyType as keyof typeof acc] = valueType;
      return acc;
    },
    {},
  ) as { [key in string]: string };
  const {
    provider: flatform,
    refreshToken: token,
    reward: rewardCoin,
    user_id: userId,
    admin: isAdmin,
  } = userInfo;
  const cookie = [flatform, token, rewardCoin, userId, isAdmin];
  if (cookie === undefined) {
    return [];
  }
  return cookie;
};

export default meltedCookie;
