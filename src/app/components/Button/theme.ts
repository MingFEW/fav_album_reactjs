import { variants } from './types'

export const styleVariants = {
  [variants.PRIMARY]: {
    color: 'white',
    backgroundImage: 'linear-gradient(90deg, #BA6268 0.55%, #A8BBCD 100%)',
    '&:hover': {
      transform: 'scale3d(1.03, 1.03, 1.03)',
    },
  },
  [variants.SECONDARY]: {
    color: 'white',
    backgroundColor: '#9F9F9F',
  },
}
