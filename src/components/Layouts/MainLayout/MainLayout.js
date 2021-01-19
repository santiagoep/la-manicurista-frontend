import PropTypes from 'prop-types';

import Seo from '@components/Seo/Seo';
import Logo from '@components/Icons/Logo';
import Accessibility from '@components/Accessibility/Accessibility';
import { StyledContainer, StyledTitleContainer } from './MainLayout.styled';

const MainLayout = ({ children, seo }) => (
  <StyledContainer>
    <Seo {...seo} />
    <Accessibility />
    <StyledTitleContainer>
      <Logo />
    </StyledTitleContainer>
    {children}
  </StyledContainer>
);

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  seo: PropTypes.shape({})
};

MainLayout.defaultProps = {
  seo: {}
};

export default MainLayout;
