import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import useConfig from '@hooks/useConfig';
import { fontSizes } from '@constants/index';
import { StyledContainer, StyledItem } from './Accessibility.styled';

const Accessibility = () => {
  const { t } = useTranslation();
  const [currentFontSize, setCurrentFontSize] = useState(1);
  const [
    { fontSize, theme, language },
    { setFontSize, toggleLanguage, toggleTheme }
  ] = useConfig();

  const toggleFontSize = () => {
    const fontSizesArr = Object.values(fontSizes);
    if (fontSizesArr[currentFontSize + 1]) {
      setFontSize(fontSizesArr[currentFontSize + 1]);
      setCurrentFontSize(currentFontSize + 1);
    } else {
      setFontSize(fontSizesArr[0]);
      setCurrentFontSize(0);
    }
  };

  return (
    <StyledContainer>
      <StyledItem
        className='accessibility__font-size'
        data-testid='accessibility__font-size'
        onClick={toggleFontSize}
      >
        {`${t('fontSize')}:${fontSize}`}
      </StyledItem>
      <StyledItem
        className='accessibility__theme'
        data-testid='accessibility__theme'
        onClick={toggleTheme}
      >
        {`${t('theme')}:${theme}`}
      </StyledItem>
      <StyledItem
        className='accessibility__language'
        data-testid='accessibility__language'
        onClick={toggleLanguage}
      >
        {`${t('language')}:${language}`}
      </StyledItem>
    </StyledContainer>
  );
};

export default Accessibility;
