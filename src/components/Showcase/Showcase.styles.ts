import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { Container } from 'components';
import * as HeadingStyles from 'components/Heading/Heading.styles';
import * as GameCardSliderStyles from 'components/GameCardSlider/GameCardSlider.styles';
import * as HighlightStyles from 'components/Highlight/Highlight.styles';

export const Wrapper = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper},
    ${HighlightStyles.Wrapper},
    ${GameCardSliderStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${HighlightStyles.Wrapper} {
      ${media.lessThan('medium')`
        margin-right: calc(-${theme.grid.gutter} / 2);
        margin-left: calc(-${theme.grid.gutter} / 2);
      `}
    }

    ${GameCardSliderStyles.Wrapper} {
      ${media.lessThan('huge')`
        margin-right: calc(-${theme.grid.gutter} / 2);
      `}
    }

    margin-bottom: calc(${theme.spacings.large} * 2);
  `}
`;
