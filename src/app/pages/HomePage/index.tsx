import React from 'react'
import { Helmet } from 'react-helmet-async'

// State
import { useAlbumsSlice } from 'state/albums/hooks'

import { NavBar } from 'app/components/NavBar'
import { PageWrapper } from 'app/components/PageWrapper'
import { BestAlbumList } from './components/BestAlbumList'
import { Footer } from 'app/components/Footer'
import { AlbumListView } from './components/AlbumListView'

export const HomePage: React.FC = () => {
  useAlbumsSlice()

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <AlbumListView />
        <BestAlbumList />
      </PageWrapper>
      <Footer />
    </>
  )
}
