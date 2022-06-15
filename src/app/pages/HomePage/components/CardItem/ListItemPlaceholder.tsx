import React from 'react'
import Skeleton from 'react-loading-skeleton'

import { Box } from 'app/components/Box'
import { ThumbnailWrapper } from './ListItem'
import { Wrapper } from './styled'

export const ListItemPlaceholder: React.FC = () => {
  return (
    <Wrapper className="list-view-frame">
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
