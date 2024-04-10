export const extractUserId = (): string => {
  const uuidInCookie = document.cookie
    .split(' ')
    .filter((item) => item.split('=')[0] === 'user_id')[0];
  const userId = uuidInCookie.split('=')[1].replace(/;/g, '');
  return userId;
};

export const extractOtherUserId = (): string => {
  const uuidInCookie = document.cookie
    .split(' ')
    .filter((item) => item.split('=')[0] === 'user_id')[0];
  const userId = uuidInCookie.split('=')[1].replace(/;/g, '');
  return userId;
};
