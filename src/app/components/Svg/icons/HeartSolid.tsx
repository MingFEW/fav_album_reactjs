import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC = (props: SvgProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.80579 6.20594C5.68031 4.33142 8.7195 4.33142 10.594 6.20594L11.9999 7.61182L13.4058 6.20594C15.2803 4.33142 18.3195 4.33142 20.194 6.20594C22.0685 8.08045 22.0685 11.1196 20.194 12.9942L11.9999 21.1883L3.80579 12.9942C1.93127 11.1196 1.93127 8.08045 3.80579 6.20594Z"
        fill="#BA6268"
      />
    </Svg>
  )
}

export default Icon
