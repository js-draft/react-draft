import React, { useContext } from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import SettingsIcon from '../svgs/SettingsIcon'
import FolderIcon from '../svgs/FolderIcon'
import PropsIcon from '../svgs/PropsIcon'
import { StorageContext } from './StorageContext'

import ReloadNotification from './ReloadNotification'

const activityBarCss = css`
  height: 100vh;
  width: 60px;
  background-color: var(--color-background);
  color: white;
  display: grid;
  grid-template-rows: 40px 40px 40px;
  grid-row-gap: 12px;
  align-items: center;
  box-sizing: border-box;
  padding: 15px;

  & svg {
    height: 30px;
    width: 30px;
    fill: var(--color-text);
    cursor: pointer;
    transition: all 0.1s ease-in-out;
  }

  & svg:hover {
    fill: var(--color-text-hover);
    opacity: 0.8;
  }

  & svg[data-selected] {
    fill: var(--color-text-selected);
  }
`

export default function ActivityBar() {
  const { getItem, setItem } = useContext(StorageContext)
  const drawerView = getItem('DRAFT_drawer_view', 'explorer')
  const drawerIsOpen = getItem('DRAFT_drawer_is_open', true)

  function handleClick(drawerType) {
    setItem('DRAFT_drawer_view', drawerType)
    const isOpen = getItem('DRAFT_drawer_is_open', true)
    if (drawerView === drawerType || !isOpen) {
      setItem('DRAFT_drawer_is_open', !isOpen)
    }
  }

  return (
    <div css={activityBarCss}>
      <ReloadNotification />
      <FolderIcon
        data-selected={drawerView === 'explorer' ? '' : undefined}
        onClick={() => handleClick('explorer')}
        data-test-explorer-icon
        />
      <PropsIcon
        data-selected={drawerView === 'props' ? '' : undefined}
        onClick={() => handleClick('props')}
        data-test-props-icon
        />
      <SettingsIcon
        data-selected={drawerView === 'settings' ? '' : undefined}
        onClick={() => handleClick('settings')}
        data-test-settings-icon
      />
    </div>
  )
}
