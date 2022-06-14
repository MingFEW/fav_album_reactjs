/**
 * This file is only need if you want to extract messages into JSON files in locales folder
 * AND if you are also using the object syntax instead of string syntax. \
 * Check the documentation section i18n for details
 */

import { translations } from 'locales/translations'
import { _t } from 'utils/messages'

export const messages = {
  addNew: () => _t(translations.homePage.addNew, '+ ADD ALBUM'),
  selectSort: () => _t(translations.homePage.selectSort),
  sortById: () => _t(translations.homePage.sortById),
  sortByName: () => _t(translations.homePage.sortByName),
  sortByDate: () => _t(translations.homePage.sortByDate),
  sortDirAsc: () => _t(translations.homePage.sortDirAsc),
  sortDirDesc: () => _t(translations.homePage.sortDirDesc),
  delete: () => _t(translations.homePage.delete),
  theBestOfAlbum: () => _t(translations.homePage.theBestOfAlbum),
  viewMode: () => _t(translations.homePage.viewMode),
}
