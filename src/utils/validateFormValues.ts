import isEmpty from 'lodash/isEmpty'
import { FormValues } from 'types'

export function validateFormValues(formValues: FormValues): boolean {
  const { en, vi } = formValues
  return (
    !isEmpty(en.title) &&
    !isEmpty(en.singer) &&
    !isEmpty(en.description) &&
    !isEmpty(vi.title) &&
    !isEmpty(vi.singer) &&
    !isEmpty(vi.description)
  )
}
