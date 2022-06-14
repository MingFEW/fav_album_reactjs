import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  background: ${p => p.theme.card};
  box-shadow: 0px 1px 6px ${p => p.theme.shadow};

  .del-item {
    cursor: pointer;
    display: inline-block;
    &:hover {
      text-decoration: underline;
    }
  }
`
export const FavoriteWrap = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: box-shadow 0.25s linear;
  &:hover {
    box-shadow: 1px 7px 15px rgb(0 0 0 / 30%);
  }
`
