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
  const userId = userInfo.user_id;
  const token = userInfo.refreshToken;
  const flatform = userInfo.provider;
  const cookie = [userId, token, flatform];
  return cookie;
};

export default meltedCookie;
