import { useCallback, useState } from 'react';

function useMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const openedMenu = Boolean(anchorEl);

  const openMenu = useCallback(event => {
    setAnchorEl(event.currentTarget);
  }, []);

  const closeMenu = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return { anchorEl, openedMenu, openMenu, closeMenu };
}

export default useMenu;
