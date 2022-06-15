import React from 'react'
import Skeleton from 'react-loading-skeleton'

import { Box } from 'app/components/Box'
import { Wrapper } from './styled'

export const GridItemPlaceholder: React.FC = () => {
  return (
    <Wrapper className="grid-view-frame">
      <Box mt="-4px">
        <Skeleton borderRadius={0} width="100%" height={300} />
      </Box>

      <Box className="p-5">
        <Skeleton />
        <Skeleton />
      </Box>
    </Wrapper>
  )
}
