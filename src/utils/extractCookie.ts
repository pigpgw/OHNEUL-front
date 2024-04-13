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
    .filter((item) => item.split('=')[0] === 'other')[0];
  const userId = uuidInCookie.split('=')[1].replace(/;/g, '');
  console.log('상대방 아이디 추출',userId)
  return userId;
};

export const extractReward = (): string => {
  const rewardId = document.cookie
    .split(' ')
    .filter((item) => item.split('=')[0] === 'reward')[0]
    .split('=')[1]
    .replace(/;/g, '');
  console.log('check rewat', rewardId);
  return rewardId;
};
