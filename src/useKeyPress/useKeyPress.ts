import { useEffect, useState } from 'react';

const useKeyPress = (target: any) => {
  const [keyPressed, setKeyPressed] = useState(false);

  const onKeyDown = (key: any) => {
    if (key === target) {
      setKeyPressed(true);
    }
  };

  const onKeyUp = (key: any) => {
    if (key === target) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  });

  return keyPressed;
};

export default useKeyPress;
