import Heading from './Heading';
import { renderWithTheme } from 'utils/test-utils';
import { screen } from '@testing-library/react';
import theme from 'styles/theme';

describe('Component: Heading', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>);
    expect(screen.getByRole('heading', { name: 'Won Games' })).toHaveStyle({
      color: theme.colors.white
    });
  });

  it('should render a black heading when specified', () => {
    renderWithTheme(<Heading color='black'>Won Games</Heading>);
    expect(screen.getByRole('heading', { name: 'Won Games' })).toHaveStyle({
      color: theme.colors.black
    });
  });

  it('should render a heading with a line on the left side', () => {
    renderWithTheme(<Heading lineLeft>Won Games</Heading>);
    expect(screen.getByRole('heading', { name: 'Won Games' })).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.primary}`
    });
  });

  it('should render a heading with a line at the bottom', () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>);
    expect(screen.getByRole('heading', { name: 'Won Games' })).toHaveStyleRule(
      'border-bottom',
      `0.5rem solid ${theme.colors.primary}`,
      {
        modifier: '::after'
      }
    );
  });

  it('should render a heading in a smaller size', () => {
    renderWithTheme(<Heading size='small'>Won Games</Heading>);
    expect(screen.getByRole('heading', { name: 'Won Games' })).toHaveStyleRule(
      'font-size',
      theme.font.sizes.medium
    );

    // also checking if line bottom is smaller
    expect(screen.getByRole('heading', { name: 'Won Games' })).toHaveStyleRule('width', `3rem`, {
      modifier: '::after'
    });
  });

  it('should render a heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor='primary' lineLeft lineBottom>
        Won Games
      </Heading>
    );

    const heading = screen.getByRole('heading', { name: 'Won Games' });

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

    const heading = screen.getByRole('heading', { name: 'Won Games' });

    expect(heading).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.secondary}`
    });

    expect(heading).toHaveStyleRule('border-bottom', `0.5rem solid ${theme.colors.secondary}`, {
      modifier: '::after'
    });
  });
});
