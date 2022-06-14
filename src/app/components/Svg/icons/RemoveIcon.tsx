import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC = (props: SvgProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        stroke="#111827"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </Svg>
  )
}

export default Icon
