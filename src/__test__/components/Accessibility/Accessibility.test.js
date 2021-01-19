import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/react';

import renderUtil from '../../render';
import Accessibility from '@components/Accessibility/Accessibility';

describe('<Accessibility />', () => {
  it('should render snapshot', () => {
    const { render } = renderUtil({ theme: true, redux: true });
    const component = render(<Accessibility />);
    expect(component).toMatchSnapshot();
  });
  it('should render click on fontSize', async () => {
    let store;
    const { render } = renderUtil(
      { theme: true, redux: true },
      undefined,
      (e) => {
        store = e;
      }
    );
    const component = render(<Accessibility />);
    const fontSizeComponent = component.getByTestId('accessibility__font-size');
    expect(fontSizeComponent.textContent).toBe('fontSize:md');
    fireEvent.click(fontSizeComponent);
    expect(store.getActions()[0].type).toBe('CHANGE_FONT_SIZE');
    expect(store.getActions()[0].fontSize).toBe('lg');
  });
  it('should render click on theme', () => {
    let store;
    const { render } = renderUtil(
      { theme: true, redux: true },
      undefined,
      (e) => {
        store = e;
      }
    );
    const component = render(<Accessibility />);
    const fontSizeComponent = component.getByTestId('accessibility__theme');
    expect(fontSizeComponent.textContent).toBe('theme:LIGHT');
    fireEvent.click(fontSizeComponent);
    expect(store.getActions()[0].type).toBe('TOGGLE_THEME');
  });
  it('should render click on language', () => {
    let store;
    const { render } = renderUtil(
      { theme: true, redux: true },
      undefined,
      (e) => {
        store = e;
      }
    );
    const component = render(<Accessibility />);
    const fontSizeComponent = component.getByTestId('accessibility__language');
    expect(fontSizeComponent.textContent).toBe('language:es');
    fireEvent.click(fontSizeComponent);
    expect(store.getActions()[0].type).toBe('TOGGLE_LANGUAGE');
  });
});
