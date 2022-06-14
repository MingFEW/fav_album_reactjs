import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => {
  return (
    <Svg width="30px" height="30px" viewBox="0 0 30 30" {...props}>
      <path
        d="M21.25 10V25M3.75 5H20H3.75ZM3.75 10H15H3.75ZM3.75 15H11.25H3.75ZM16.25 15L21.25 10L16.25 15ZM21.25 10L26.25 15L21.25 10Z"
        stroke="#111827"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Icon
