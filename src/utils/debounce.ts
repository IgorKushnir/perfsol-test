/* eslint-disable  @typescript-eslint/no-explicit-any */

export const debounce = (func: any, delay = 300) => {
  let timeoutId: NodeJS.Timeout;

  return function (...args: any) {
    // const context = this;

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(args);
    }, delay);
  };
};
