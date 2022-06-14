import styled from 'styled-components'
import { space, typography, layout } from 'styled-system'
import { TextProps } from './types'

const getFontSize = ({ fontSize, large }: TextProps) => {
  return large ? '16px' : fontSize || '14px'
}

const Text = styled.div<TextProps>`
  color: ${p => p.color || p.theme.text};
  font-size: ${getFontSize};
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  line-height: 1.5;
  font-feature-settings: 'zero' on;
  text-decoration: none;
  word-break: break-word;
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  ${({ ellipsis }) =>
    ellipsis &&
    `white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;`}
    
  ${space}
  ${typography}
  ${layout}
`

Text.defaultProps = {
  large: false,
  ellipsis: false,
}

export default Text
