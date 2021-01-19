import '@testing-library/jest-dom';
import { fireEvent, waitFor } from '@testing-library/react';

import renderUtil from '../render';
import Home, { getStaticProps } from '@pages/index';

describe('Home', () => {
  it('should render snapshot', () => {
    const { render } = renderUtil({ redux: true, theme: true });
    const component = render(<Home />);
    expect(component).toMatchSnapshot();
  });
  it('should render snapshot in mobile', () => {
    window.innerWidth = 319;
    const { render } = renderUtil({ redux: true, theme: true });
    const component = render(<Home />);
    expect(component).toMatchSnapshot();
  });
  it('should render tracks', async () => {
    const { props } = await getStaticProps();
    const { render } = renderUtil({ redux: true, theme: true });
    const component = render(<Home {...props} />);
    await waitFor(async () =>
      expect(component.getAllByTestId('track').length).toBeGreaterThan(1)
    );
  });
  it('should render track summary', async () => {
    const { props } = await getStaticProps();
    const { render } = renderUtil({ redux: true, theme: true });
    const component = render(<Home {...props} />);
    const [track] = await component.findAllByTestId('track');
    const image = track.querySelector('img');
    const name = track.querySelector('h2');
    const artist = track.querySelectorAll('p')[0];

    expect(image).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(artist).toBeInTheDocument();
  });
  it('should open track player', async () => {
    const { props } = await getStaticProps();
    const { render } = renderUtil({ redux: true, theme: true });
    const component = render(<Home {...props} />);
    const noTrackSelected = component.getByTestId(
      'track-detail__no-track-selected'
    );
    expect(noTrackSelected).toBeInTheDocument();
    const [track] = await component.findAllByTestId('track');
    fireEvent.click(track);

    expect(noTrackSelected).not.toBeInTheDocument();
    expect(component.getByTestId('track-detail__player')).toBeInTheDocument();
  });
  it('should render search input', () => {
    const { render } = renderUtil({ redux: true, theme: true });
    const component = render(<Home />);
    const input = component.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });
  it('should search', async () => {
    const { props } = await getStaticProps();
    const { render } = renderUtil({ redux: true, theme: true });
    const component = render(<Home {...props} />);
    const input = component.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'A' } });
    const [track] = await component.findAllByTestId('track');
    expect(track.querySelector('h2').textContent.charAt(0)).toBe('A');
  });

  it('Should get the list of tracks in server side', async () => {
    const staticProps = await getStaticProps();
    expect(staticProps).toHaveProperty('props');
    expect(staticProps).toHaveProperty('revalidate');
    expect(staticProps.props).toHaveProperty('tracks');
    expect(staticProps.props).toHaveProperty('totalTracks');
  });
});
