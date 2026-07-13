import type { ProSettings } from '@ant-design/pro-components'

const defaultSettings: Partial<ProSettings> = {
  navTheme: 'light',
  colorPrimary: '#1677ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  splitMenus: false,
  siderMenuType: 'sub',
  footerRender: false,
}

export default defaultSettings

export const SETTINGS_STORAGE_KEY = 'prototype-pro-layout-settings'

export function loadSettings(): Partial<ProSettings> {
  try {
    const raw = localStorage.getItem(SETTINGS_STORAGE_KEY)
    if (raw) return { ...defaultSettings, ...JSON.parse(raw) }
  } catch {
    // ignore
  }
  return { ...defaultSettings }
}

export function saveSettings(settings: Partial<ProSettings>) {
  localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings))
}
