import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    .slick-slide > div {
      margin: 0 ${theme.spacings.xxsmall};
      cursor: pointer;
    }

    .slick-list {
      margin: 0 -${theme.spacings.xxsmall};
    }

    .slick-prev,
    .slick-next {
      display: block;
      color: ${theme.colors.white};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      transform: translate(0, -50%);
    }

    .slick-prev {
      left: -${theme.spacings.xxlarge};
    }

    .slick-next {
      right: -${theme.spacings.xxlarge};
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }

    ${media.lessThan('huge')`
      overflow-x: hidden;
    `}
  `}
`;

const modalModifiers = {
  open: () => css`
    opacity: 1;
  `,
  closed: () => css`
    opacity: 0;
    pointer-events: none;
  `
};

type ModalProps = {
  isOpen: boolean;
};

export const Modal = styled.div<ModalProps>`
  ${({ isOpen }) => css`
    ${isOpen ? modalModifiers.open() : modalModifiers.closed()};
  `}
`;
