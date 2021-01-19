import styled from 'styled-components';

export default styled.p`
  margin-right: ${({ theme }) => theme.utils.spacing(1)};
  margin-top: ${({ theme }) => theme.utils.spacing(1)};
  :last-of-type {
    margin-right: 0;
  }
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.font.size.caption};
  color: ${({ theme }) => theme.colors.font.tertiary};
`;
