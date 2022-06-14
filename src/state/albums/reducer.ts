import { createSlice } from 'utils/@reduxjs/toolkit'
import { AlbumsState } from 'types/AlbumsState'

const INITIAL_STATE: AlbumsState = {
  isLoading: true,
  albums: [],
  error: null,
  albumsCount: 0,
}

export const slice = createSlice({
  name: 'albums',
  initialState: INITIAL_STATE,
  reducers: {
    loadAlbums: state => {
      state.isLoading = true
      state.error = null
    },
    albumsLoaded: (state, action) => {
      state.isLoading = false
      state.albums = action.payload
    },
    loadAlbumsError: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    albumsCountLoaded: (state, action) => {
      state.albumsCount = action.payload
    },
  },
})

// Actions
export const { loadAlbums, albumsLoaded, loadAlbumsError, albumsCountLoaded } =
  slice.actions
