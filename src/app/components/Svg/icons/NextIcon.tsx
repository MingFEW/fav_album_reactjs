import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path
        d="M9 5L16 12L9 19"
        stroke="#111827"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Icon
