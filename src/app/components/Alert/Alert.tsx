import React from 'react'
import styled, { DefaultTheme } from 'styled-components'
import { Text } from '../Text'
import {
  BlockIcon,
  CheckCircleIcon,
  RemoveIcon,
  ErrorIcon,
  InfoIcon,
} from '../Svg'
import Flex from '../Box/Flex'
import { AlertProps, variants } from './types'

interface ThemedIconLabel {
  variant: AlertProps['variant']
  theme: DefaultTheme
  hasDescription: boolean
}

const getThemeColor = ({ theme, variant = variants.INFO }: ThemedIconLabel) => {
  switch (variant) {
    case variants.DANGER:
      return 'red'
    case variants.WARNING:
      return 'yellow'
    case variants.SUCCESS:
      return 'green'
    case variants.INFO:
    default:
      return 'blue'
  }
}

const getIcon = (variant: AlertProps['variant'] = variants.INFO) => {
  switch (variant) {
    case variants.DANGER:
      return BlockIcon
    case variants.WARNING:
      return ErrorIcon
    case variants.SUCCESS:
      return CheckCircleIcon
    case variants.INFO:
    default:
      return InfoIcon
  }
}

const IconLabel = styled.div<ThemedIconLabel>`
  background-color: ${getThemeColor};
  border-radius: 16px 0 0 16px;
  color: ${({ theme }) => theme.card};
  padding: 12px;
`

const withHandlerSpacing = 32 + 12 + 8 // button size + inner spacing + handler position
const Details = styled.div<{ hasHandler: boolean }>`
  flex: 1;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: ${({ hasHandler }) =>
    hasHandler ? `${withHandlerSpacing}px` : '12px'};
  padding-top: 12px;
`

const CloseHandler = styled.button`
  border-radius: 0 16px 16px 0;
  right: 8px;
  position: absolute;
  top: 8px;
`

const StyledAlert = styled(Flex)`
  position: relative;
  background-color: ${({ theme }) => theme.card};
  border: 1px solid ${p => p.theme.shadow};
  border-radius: 16px;
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1),
    0px 1px 1px rgba(0, 0, 0, 0.05);
`

const Alert: React.FC<AlertProps> = ({ title, children, variant, onClick }) => {
  const Icon = getIcon(variant)

  return (
    <StyledAlert>
      <IconLabel variant={variant} hasDescription={!!children}>
        {/* <Icon color="currentColor" width="24px" /> */}
      </IconLabel>
      <Details hasHandler={!!onClick}>
        <Text bold>{title}</Text>
        {typeof children === 'string' ? (
          <Text as="p">{children}</Text>
        ) : (
          children
        )}
      </Details>
      {onClick && (
        <CloseHandler onClick={onClick}>
          <RemoveIcon />
          {/* <IconButton scale="sm" variant="text" onClick={onClick}>
            <RemoveIcon width="24px" color="currentColor" />
          </IconButton> */}
        </CloseHandler>
      )}
    </StyledAlert>
  )
}

export default Alert
