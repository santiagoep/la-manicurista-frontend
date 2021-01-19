import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import {
  StyledContainer,
  StyledErrorMessage,
  StyledSearchContainer
} from './SearchTracks.styled';
import Input from '@components/Input/Input';
import useDebounce from '@hooks/useDebounce';
import { formatNumber } from '@utils/numbers';
import Tracks from '@components/Tracks/Tracks';
import Paginator from '@components/Paginator/Paginator';

const SearchTracks = ({
  tracks,
  error,
  total,
  limit,
  onPageChange,
  onSearch,
  onSelectTrack
}) => {
  const { t } = useTranslation();
  const debouncedOnSearch = useDebounce(onSearch, 150);

  return (
    <StyledContainer>
      <StyledSearchContainer>
        <Input
          data-testid='search-tracks__input'
          placeholder={`${t('searchATrack')}${formatNumber(total)}`}
          onChange={(e) => {
            e.persist();
            debouncedOnSearch(e?.target.value);
          }}
        />
      </StyledSearchContainer>
      {!error ? (
        <Tracks tracks={tracks} onSelectTrack={onSelectTrack} />
      ) : (
        <StyledErrorMessage>{error}</StyledErrorMessage>
      )}
      <Paginator
        onPageChange={({ selected }) => onPageChange(selected)}
        pageCount={total / limit}
      />
    </StyledContainer>
  );
};

SearchTracks.propTypes = {
  tracks: Tracks.propTypes.tracks,
  error: PropTypes.string,
  total: PropTypes.number,
  limit: PropTypes.number,
  onPageChange: PropTypes.func,
  onSearch: PropTypes.func,
  onSelectTrack: PropTypes.func
};

SearchTracks.defaultProps = {
  tracks: Tracks.defaultProps.tracks,
  error: undefined,
  total: 0,
  limit: 10,
  onPageChange: () => {},
  onSearch: () => {},
  onSelectTrack: () => {}
};

export default SearchTracks;
