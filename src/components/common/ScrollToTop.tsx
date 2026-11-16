import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });
    }
  }, [pathname, hash]);

  return null;
};
