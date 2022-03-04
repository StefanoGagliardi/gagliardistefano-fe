export const getWebSiteUrl = (): string => {
  if (process.env.NODE_ENV === 'production') {
    return 'http://localhost:3000';
  } else {
    return 'http://localhost:3000';
  }
};
