import React, { FunctionComponent } from 'react'
import RcPagination from 'rc-pagination'
import localEN from './locale'

import { PrevIcon, NextIcon } from '../Svg'
import { StyledPagination } from './StyledPagination'

interface PaginationProps {
  current: number
  total: number
  pageSize: number
  onChange: (page: number, pageSize: number) => void
}

const Pagination: FunctionComponent<PaginationProps> = ({
  current,
  total,
  pageSize,
  onChange,
  ...rest
}) => {
  return (
    <StyledPagination>
      <RcPagination
        locale={localEN}
        current={current}
        total={total}
        pageSize={pageSize}
        onChange={onChange}
        prevIcon={<PrevIcon />}
        nextIcon={<NextIcon />}
        {...rest}
      />
    </StyledPagination>
  )
}

export default React.memo(Pagination)
