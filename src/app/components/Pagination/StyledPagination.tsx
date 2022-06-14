import styled from 'styled-components/macro'
import { media } from 'styles/media'

export const StyledPagination = styled.div`
  .rc-pagination ul,
  .rc-pagination ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .rc-pagination {
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.3s;
  }

  .rc-pagination::after {
    display: block;
    clear: both;
    height: 0;
    overflow: hidden;
    visibility: hidden;
    content: ' ';
  }

  .rc-pagination-item {
    display: inline-block;
    background-color: transparent;
    width: 50px;
    line-height: 50px;
    margin-right: 10px;
    text-align: center;
    vertical-align: middle;
    list-style: none;
    outline: 0;
    user-select: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .rc-pagination-item a {
    display: block;
    padding: 0 6px;
    color: ${p => p.theme.text2};
  }

  .rc-pagination-item a:hover {
    text-decoration: none;
  }

  .rc-pagination-item:hover {
    opacity: 0.6;
  }

  .rc-pagination-item-active {
    background-color: ${p => p.theme.grey1};

    a {
      color: ${p => p.theme.text1};
    }
  }

  .rc-pagination-jump-prev button,
  .rc-pagination-jump-next button {
    background: transparent;
    border: none;
    cursor: pointer;
  }

  .rc-pagination-jump-prev button:after,
  .rc-pagination-jump-next button:after {
    display: block;
    content: '...';
  }

  .rc-pagination-jump-prev button:hover,
  .rc-pagination-jump-next button:hover {
    opacity: 0.6;
  }

  .rc-pagination-jump-prev button:focus,
  .rc-pagination-jump-next button:focus {
    border: none;
    outline: 0;
  }

  .rc-pagination-jump-prev,
  .rc-pagination-jump-next {
    margin-right: 6px;
  }

  .rc-pagination-prev {
    margin-right: 20px;
    user-select: none;
  }

  .rc-pagination-next {
    margin-left: 20px;
    user-select: none;
  }

  .rc-pagination-prev,
  .rc-pagination-next,
  .rc-pagination-jump-prev,
  .rc-pagination-jump-next {
    display: inline-block;
    vertical-align: middle;
    list-style: none;
    transition: all 0.3s;
    cursor: pointer;
  }

  .rc-pagination-prev svg,
  .rc-pagination-next svg {
    width: 16px;
    fill: transparent;

    path {
      stroke: ${p => p.theme.text2};
    }
  }

  .rc-pagination-prev:hover,
  .rc-pagination-next:hover {
    opacity: 0.5;
  }

  .rc-pagination-prev:hover button,
  .rc-pagination-next:hover button {
    opacity: 0.8;
    transition: all 300ms;
  }

  .rc-pagination-disabled,
  .rc-pagination-disabled:hover,
  .rc-pagination-disabled:focus {
    cursor: not-allowed;
    display: none;
  }

  .rc-pagination-disabled button,
  .rc-pagination-disabled:hover button,
  .rc-pagination-disabled:focus button {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${media.md`
    .rc-pagination {
        font-size: 16px;
        line-height: 22px;
    }

    .rc-pagination-item {
        display: inline-block;
        width: 60px;
        line-height: 60px;
    }

    .rc-pagination-jump-prev,
    .rc-pagination-jump-next {
        display: inline-block;
    }

    .rc-pagination-prev {
        margin-right: 40px;
    }

    .rc-pagination-next {
        margin-left: 28px;
    }

    .rc-pagination-prev svg,
    .rc-pagination-next svg {
        width: 24px;
        height: 24px;
    }

    .rc-pagination-item:not(.rc-pagination-item-active) {
        display: inline-block;
    }
  `}
`
