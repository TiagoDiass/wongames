import Heading from './Heading';
import { renderWithTheme } from 'utils/test-utils';
import { screen } from '@testing-library/react';
import theme from 'styles/theme';

const getHeading = () => screen.getByRole('heading', { name: 'Won Games' });

describe('Component: Heading', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>);
    expect(getHeading()).toHaveStyle({
      color: theme.colors.white
    });
  });

  it('should render a black heading when specified', () => {
    renderWithTheme(<Heading color='black'>Won Games</Heading>);
    expect(getHeading()).toHaveStyle({
      color: theme.colors.black
    });
  });

  it('should render a heading with a line on the left side', () => {
    renderWithTheme(<Heading lineLeft>Won Games</Heading>);
    expect(getHeading()).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.primary}`
    });
  });

  it('should render a heading with a line at the bottom', () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>);
    expect(getHeading()).toHaveStyleRule('border-bottom', `0.5rem solid ${theme.colors.primary}`, {
      modifier: '::after'
    });
  });

  it('should render a heading in a huge size', () => {
    renderWithTheme(<Heading size='huge'>Won Games</Heading>);
    expect(getHeading()).toHaveStyleRule('font-size', theme.font.sizes.huge);
  });

  it('should render a heading in a smaller size', () => {
    renderWithTheme(<Heading size='small'>Won Games</Heading>);
    const heading = getHeading();

    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.medium);

    // also checking if line bottom is smaller
    expect(heading).toHaveStyleRule('width', `3rem`, {
      modifier: '::after'
    });
  });

  it('should render a heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor='primary' lineLeft lineBottom>
        Won Games
      </Heading>
    );

    const heading = getHeading();

    expect(heading).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.primary}`
    });

    expect(heading).toHaveStyleRule('border-bottom', `0.5rem solid ${theme.colors.primary}`, {
      modifier: '::after'
    });
  });

  it('should render a heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor='secondary' lineLeft lineBottom>
        Won Games
      </Heading>
    );

    const heading = getHeading();

    expect(heading).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.secondary}`
    });

    expect(heading).toHaveStyleRule('border-bottom', `0.5rem solid ${theme.colors.secondary}`, {
      modifier: '::after'
    });
  });
});
