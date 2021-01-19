import { useMemo } from 'react';
import PropTypes from 'prop-types';

import Track from '@components/Track/Track';
import StyledContainer from './Tracks.styled';

const Tracks = ({ tracks, onSelectTrack }) => {
  const memoizedTracks = useMemo(
    () =>
      tracks.map((track, index) => (
        <Track
          {...track}
          data-testid='track'
          key={`track-${track?.name}-${index}`}
          onClick={onSelectTrack}
        />
      )),
    [tracks, onSelectTrack]
  );
  return <StyledContainer>{memoizedTracks}</StyledContainer>;
};

Tracks.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape(Track.propTypes)),
  onSelectTrack: PropTypes.func
};

Tracks.defaultProps = {
  tracks: [],
  onSelectTrack: () => {}
};

export default Tracks;
