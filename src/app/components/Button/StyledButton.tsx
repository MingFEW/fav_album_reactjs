import styled from 'styled-components'
import { space, layout, variant, typography } from 'styled-system'
import { styleVariants } from './theme'
import { BaseButtonProps } from './types'

const StyledButton = styled.button<BaseButtonProps>`
  background-color: transparent;
  border: 0;
  position: relative;
  padding: 0;
  outline: none !important;
  box-shadow: none !important;
  pointer-events: all;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  padding: 12px 30px;
  border-radius: 10px;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.9;
  }
  color: ${p => p.theme.text};

  ${variant({
    variants: styleVariants,
  })}
  ${layout} ${space} ${typography};
`

export default StyledButton
