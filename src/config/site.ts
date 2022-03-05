export const getWebSiteUrl = (): string => {
  if (process.env.NODE_ENV === 'production') {
    return 'https://gagliardistefano-fe.vercel.app';
  } else {
    return 'http://localhost:3000';
  }
};
