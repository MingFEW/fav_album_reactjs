import { Box } from 'app/components/Box'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

import { Wrapper } from './GridItem'
import { ThumbnailWrapper } from './ListItem'

export const ListItemPlaceholder: React.FC = () => {
  return (
    <Wrapper>
      <div className="p-4 flex flex-col sm:flex-row gap-6 items-center justify-start">
        <ThumbnailWrapper>
          <Box mt="-4px">
            <Skeleton width="100%" height={140} />
          </Box>
        </ThumbnailWrapper>

        <Box width="100%">
          <Skeleton count={4} />
        </Box>
      </div>
    </Wrapper>
  )
}
