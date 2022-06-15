import React, { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MoonIcon, SunIcon } from '../Svg'

import { selectThemeKey } from 'styles/theme/slice/selectors'
import { ThemeKeyType } from 'styles/theme/slice/types'
import { saveTheme } from 'styles/theme/utils'
import { themeActions } from 'styles/theme/slice'

import { Toggle } from '../Toggle'

export const ThemeSwitch: React.FC = memo(() => {
  const theme = useSelector(selectThemeKey)
  const dispatch = useDispatch()

  const toggleTheme = useCallback(
    (theme: ThemeKeyType) => {
      const checkTheme = theme === 'light' ? 'dark' : 'light'
      saveTheme(checkTheme)
      dispatch(themeActions.changeTheme(checkTheme))
    },
    [dispatch],
  )

  return (
    <Toggle
      checked={theme === 'dark' || theme === 'system'}
      defaultColor="textDisabled"
      checkedColor="textDisabled"
      onChange={() => toggleTheme(theme)}
      scale="md"
      startIcon={(isActive = false) => (
        <SunIcon color={isActive ? 'red1' : 'backgroundAlt'} />
      )}
      endIcon={(isActive = false) => (
        <MoonIcon color={isActive ? 'white' : 'backgroundAlt'} />
      )}
    />
  )
})
