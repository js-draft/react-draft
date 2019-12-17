import React from 'react'
import useLocalStorage from '../../useLocalStorage'

export const SettingsContext = React.createContext()

export default function SettingsProvider({ children }) {
  const [settings, setSettings] = useLocalStorage('react-draft-settings', {
    demoPadding: 0,
    editDrawerSide: 'right',
  })

  const updateSetting = (settingKey, newValue) => {
    setSettings(prev => {
      return { ...prev, [settingKey]: newValue }
    })
  }

  return (
    <SettingsContext.Provider value={{ settings, updateSetting }}>
      {children}
    </SettingsContext.Provider>
  )
}
