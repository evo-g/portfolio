import { useEffect } from 'react';

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    document.addEventListener('mousedown', listener);
    return () => {
      document.addEventListener('mousedown', listener);
    };
  },
    [ref, handler],
  );
};
