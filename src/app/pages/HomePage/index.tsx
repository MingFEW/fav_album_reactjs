import React from 'react'
import { Helmet } from 'react-helmet-async'

import { NavBar } from 'app/components/NavBar'
import { PageWrapper } from 'app/components/PageWrapper'
import { FilterBox } from './components/FilterBox'
import { CardItemGrid } from './components/CardItemGrid'
import { CardItemList } from './components/CardItemList'
import { BestAlbumList } from './components/BestAlbumList'
import { Footer } from 'app/components/Footer'
import { Pagination } from 'app/components/Pagination'
import { Flex } from 'app/components/Box'
import { AddModal } from './components/AddModal'

export const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <FilterBox />

        {/* GRID VIEW */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }, (v, k: number) => (
            // <CardItemGrid key={k} />
          ))}
        </div> */}

        {/* LIST VIEW */}
        <div className="flex flex-col gap-6">
          {Array.from({ length: 8 }, (v, k: number) => (
            <CardItemList key={k} />
          ))}
        </div>

        <Flex className="my-10" alignItems="center" justifyContent="center">
          <Pagination current={1} pageSize={5} total={20} onChange={() => {}} />
        </Flex>

        <BestAlbumList />

        <AddModal />
      </PageWrapper>
      <Footer />
    </>
  )
}
