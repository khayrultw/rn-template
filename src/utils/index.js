export { default as normalize } from './normalization';

export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
