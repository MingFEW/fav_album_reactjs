import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => {
  return (
    <Svg width="30px" height="30px" viewBox="0 0 30 30" {...props}>
      <path
        d="M3 4H16M3 8H12M3 12H12M17 8V20M17 20L13 16M17 20L21 16"
        stroke="#111827"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Icon
