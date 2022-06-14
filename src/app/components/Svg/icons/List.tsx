import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC = (props: SvgProps) => {
  return (
    <Svg width="30px" height="30px" viewBox="0 0 30 30" fill="none" {...props}>
      <path
        d="M5 7.5H25M5 15H25M5 22.5H13.75"
        stroke="#111827"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Icon
