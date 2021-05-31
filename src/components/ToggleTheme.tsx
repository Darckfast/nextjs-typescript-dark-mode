import React from 'react'
import { DarkIcon } from '../styles/icons/darkIcon'
import { LightIcon } from '../styles/icons/lightIcon'

interface ToggleThemeProps {
  currentTheme: string,
  changeTheme: () => void
}

const ToggleTheme: React.FC<ToggleThemeProps> = props => {
  return (
    <a className={'toggle-button'} onClick={props.changeTheme}>
      {props.currentTheme === 'dark' ? <DarkIcon></DarkIcon> : <LightIcon></LightIcon>}
    </a>
  )
}

export default ToggleTheme
