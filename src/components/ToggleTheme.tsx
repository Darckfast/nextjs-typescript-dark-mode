import React from 'react'
import { DarkIcon } from '../styles/icons/darkIcon'
import { LightIcon } from '../styles/icons/lightIcon'

interface ToggleThemeProps {
  currentTheme: string,
  changeTheme: () => void
}

const ToggleTheme: React.FC<ToggleThemeProps> = props => {
  console.log(props.currentTheme)
  return (
    <a className={'toggle-button'} onClick={props.changeTheme}>
      {props.currentTheme === 'light' ? <LightIcon></LightIcon> : <DarkIcon></DarkIcon>}
    </a>
  )
}

export default ToggleTheme
