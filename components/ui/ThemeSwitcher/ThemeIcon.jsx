import { Moon, Sun, System } from '@components/icons'


const ThemeIcon = ({ theme, ...props }) => {
  switch (theme) {
    case 'light':
      return <Sun {...props} />

    case 'dark':
      return <Moon {...props} />

    default:
      return <System {...props} />
  }
}

export default ThemeIcon
