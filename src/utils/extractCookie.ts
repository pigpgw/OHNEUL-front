export const extractUserId = (): string => {
  const cookieString = document.cookie;
  if (cookieString) {
    const uuidInCookie = cookieString
      .split('; ')
      .find((item) => item.startsWith('user_id='));
    if (uuidInCookie) {
      const userId = uuidInCookie.split('=')[1];
      return userId;
    }
  }
  return '';
};

export const extractOtherUserId = (): string => {
  const cookieString = document.cookie;
  if (cookieString) {
    const uuidInCookie = cookieString
      .split(' ')
      .filter((item) => item.split('=')[0] === 'other')[0];
    if (uuidInCookie) {
      const userId = uuidInCookie.split('=')[1].replace(/;/g, '');
      return userId;
    }
  }
  return '';
};

export const extractReward = (): string => {
  const cookieString = document.cookie;
  if (cookieString) {
    const rewardId =
      cookieString
        .split(' ')
        .filter((item) => item.split('=')[0] === 'reward')[0]
        ?.split('=')[1]
        ?.replace(/;/g, '') ?? '';
    return rewardId;
  }
  return '';
};
