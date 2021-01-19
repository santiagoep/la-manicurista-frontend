import nprogress from 'nprogress';
import statusCodes from 'http-status-codes';
import { useTranslation } from 'react-i18next';
import { useEffect, useState, useRef } from 'react';

import getApis from '@utils/apis';

const requiredApis = [
  {
    domain: 'backend',
    endpoints: ['getTracks']
  }
];

const useTrackSearch = ({
  initialTracks,
  initialTotalTracks,
  market = 'ES',
  q = 'A',
  limit = 10,
  offset = 0
} = {}) => {
  const firstUpdate = useRef(true);
  const { t } = useTranslation();
  const [error, setError] = useState(undefined);
  const [query, setQuery] = useState(q);
  const [page, setPage] = useState(offset);
  const [tracks, setTracks] = useState(initialTracks);
  const [totalTracks, setTotalTracks] = useState(initialTotalTracks);
  const apis = getApis(requiredApis);
  const { backend: backendApi } = apis;

  useEffect(() => {
    if (!firstUpdate.current) {
      const getTracks = () =>
        backendApi.getTracks({
          params: {
            market,
            query,
            limit,
            page
          }
        });
      nprogress.start();
      getTracks()
        .then(({ data }) => {
          setError(undefined);
          setTracks(data?.data?.attributes?.items);
          setTotalTracks(data?.meta?.total);
          nprogress.done();
        })
        .catch((e) => {
          const { status } = e.response;
          if (status === statusCodes.NOT_FOUND) {
            setError(t('thereArentTracksInThisPage'));
          } else {
            setError(t('unknownError'));
          }
          nprogress.done();
        });
    } else {
      firstUpdate.current = false;
    }
  }, [page, query, limit, market]);

  return {
    tracks,
    error,
    setPage,
    setQuery,
    offset,
    total: totalTracks,
    limit
  };
};

export default useTrackSearch;
