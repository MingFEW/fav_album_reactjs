import React, { useCallback, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { NavBar } from 'app/components/NavBar'
import { PageWrapper } from 'app/components/PageWrapper'
import { FilterBox } from './components/FilterBox'
import { CardItemGrid } from './components/CardItemGrid'
import { CardItemList } from './components/CardItemList'
import { BestAlbumList } from './components/BestAlbumList'
import { Footer } from 'app/components/Footer'
import { AddAlbum } from 'app/components/Modal'

export const HomePage: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const openModal = useCallback(() => {
    setShowModal(true)
  }, [])

  const closeModal = useCallback(() => {
    setShowModal(false)
  }, [])

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
            // <CardItemGrid key={k} />
            <CardItemList key={k} />
          ))}
        </div>

        <BestAlbumList />
      </PageWrapper>
      <Footer />
      <AddAlbum  isOpen={showModal} closeModal={closeModal} />
    </>
  )
}
