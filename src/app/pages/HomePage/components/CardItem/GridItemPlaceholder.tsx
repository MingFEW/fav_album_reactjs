import React from 'react'
import Skeleton from 'react-loading-skeleton'

import { Wrapper } from './GridItem'
import { Box } from 'app/components/Box'

export const GridItemPlaceholder: React.FC = () => {
  return (
    <Wrapper>
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
