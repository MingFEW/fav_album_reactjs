import isEmpty from 'lodash/isEmpty'

export function getAssetPath(url: string): string {
  if (isEmpty(url)) {
    return ''
  }

  const assetUrl = `${
    process.env.REACT_APP_BASE_URL || 'http://strapi.everest.land'
  }`
  return assetUrl + url
}
