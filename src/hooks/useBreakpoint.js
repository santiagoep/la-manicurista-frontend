import { useState, useEffect } from 'react';

import { breakpoints, breakpointsValues } from '@constants/index';

const calculateBreakpoint = (width) => {
  const { mobile, tablet, desktop, screen } = breakpointsValues;
  if (width >= screen) {
    return breakpoints.screen;
  } else if (width >= desktop && width < screen) {
    return breakpoints.desktop;
  } else if (width >= tablet && width < desktop) {
    return breakpoints.tablet;
  } else if (width >= mobile && width < tablet) {
    return breakpoints.mobile;
  } else {
    return breakpoints.smallMobile;
  }
};

const getCurrentBreakpoint = () => {
  if (process.browser) {
    return calculateBreakpoint(window.innerWidth);
  }
  return breakpoints.mobile;
};

const useBreakpoint = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState(
    getCurrentBreakpoint()
  );

  useEffect(() => {
    const updateSize = () => {
      setCurrentBreakpoint(getCurrentBreakpoint());
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return currentBreakpoint;
};

export default useBreakpoint;

export const useMobile = () => {
  const currentBreakpoint = useBreakpoint();
  const isMobileBreakpoint =
    currentBreakpoint === breakpoints.smallMobile ||
    currentBreakpoint === breakpoints.mobile;

  return isMobileBreakpoint;
};
