import PropTypes from 'prop-types';

import getApis from '@utils/apis';
import {
  StyledContainer,
  SearchTracksContainer,
  StyledTrackDetailContainer
} from '@page-styles/Home.styled';
import useHome from '@hooks/useHome';
import TrackDetail from '@components/TrackDetail/TrackDetail';
import SearchTracks from '@components/SearchTracks/SearchTracks';
import MainLayout from '@components/Layouts/MainLayout/MainLayout';

const requiredApis = [
  {
    domain: 'backend',
    endpoints: ['getTracks']
  }
];

const Home = ({ tracks: initialTracks, totalTracks: initialTotalTracks }) => {
  const {
    tracks,
    error,
    total,
    limit,
    changePage,
    changeQuery,
    onSelectTrack,
    currentTrack
  } = useHome({ initialTracks, initialTotalTracks });

  return (
    <MainLayout>
      <StyledContainer>
        <SearchTracksContainer className='home__track-list'>
          <SearchTracks
            tracks={tracks}
            error={error}
            total={total}
            limit={limit}
            onPageChange={changePage}
            onSearch={changeQuery}
            onSelectTrack={onSelectTrack}
          />
        </SearchTracksContainer>
        <StyledTrackDetailContainer className='home__track-detail'>
          <TrackDetail {...currentTrack} />
        </StyledTrackDetailContainer>
      </StyledContainer>
    </MainLayout>
  );
};

export const getStaticProps = async () => {
  const apis = getApis(requiredApis);
  const { backend: backendApi } = apis;
  const { data } = await backendApi.getTracks({
    params: {
      market: 'ES',
      query: 'A',
      limit: 10,
      page: 0
    }
  });
  return {
    props: {
      tracks: data?.data?.attributes?.items || null,
      totalTracks: data?.meta?.total || null
    },
    revalidate: 86400 // every 24h
  };
};

Home.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({})),
  totalTracks: PropTypes.number
};

Home.defaultProps = {
  tracks: [],
  totalTracks: 0
};

export default Home;
