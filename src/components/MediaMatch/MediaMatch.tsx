import styled, { css } from 'styled-components';
import media, { DefaultBreakpoints } from 'styled-media-query';

type Breakpoint = keyof DefaultBreakpoints;

export type MediaMatchProps = {
  lessThan?: Breakpoint;
  greaterThan?: Breakpoint;
};

const mediaMatchModifiers = {
  lessThan: (size: Breakpoint) => css`
    ${media.lessThan(size)`
      display: block;
    `}
  `,

  greaterThan: (size: Breakpoint) => css`
    ${media.greaterThan(size)`
      display: block;
    `}
  `
};

/**
 * Component to make the content be shown or hidden depending on the screen size (media-query like)
 */
const MediaMatch = styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
  `}
`;

export default MediaMatch;
