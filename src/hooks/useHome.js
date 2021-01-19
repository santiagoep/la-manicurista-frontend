import { useCallback, useState } from 'react';

import useTrackSearch from '@hooks/useTrackSearch';

const useHome = ({ initialTracks, initialTotalTracks }) => {
  const [currentTrack, setCurrentTrack] = useState(undefined);
  const { tracks, error, setPage, setQuery, total, limit } = useTrackSearch({
    initialTracks,
    initialTotalTracks
  });

  const changePage = useCallback((page) => setPage(page), [setPage]);

  const changeQuery = useCallback(
    (query) => {
      if (query?.length > 0) setQuery(query);
    },
    [setQuery]
  );

  const onSelectTrack = (trackData) => setCurrentTrack(trackData);
  return {
    tracks,
    error,
    total,
    limit,
    changePage,
    changeQuery,
    onSelectTrack,
    currentTrack
  };
};

export default useHome;
