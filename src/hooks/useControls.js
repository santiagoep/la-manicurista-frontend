import { useEffect, useCallback } from 'react';

const useControls = ({ src, player }) => {
  const play = () => {
    if (src) {
      player?.current?.play();
    }
  };
  const pause = useCallback(() => player?.current?.pause(), [player]);

  useEffect(() => {
    if (!src) pause();
  }, [src, pause]);

  return { play, pause };
};
export default useControls;
