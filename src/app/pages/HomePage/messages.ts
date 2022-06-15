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
  grid: () => _t(translations.homePage.grid),
  list: () => _t(translations.homePage.list),
  ascending: () => _t(translations.homePage.ascending),
  descending: () => _t(translations.homePage.descending),
  ok: () => _t(translations.modal.ok),
  cancel: () => _t(translations.modal.cancel),
  deleteThisAlbum: () => _t(translations.modal.deleteThisAlbum),
  addNewAlbum: () => _t(translations.notification.addNewAlbum),
  submit: () => _t(translations.modal.submit),
  addNewAlbumTitle: () => _t(translations.modal.addnewAlbumTitle),
  title: () => _t(translations.form.title),
  singer: () => _t(translations.form.singer),
  description: () => _t(translations.form.description),
  english: () => _t(translations.modal.english),
  vietnamese: () => _t(translations.modal.vietnamese),
}
