import cn from 'clsx'
import s from './Grid.module.css'


const Grid = ({
  className,
  layout = 'A',
  children,
  variant = 'default',
}) => {
  const rootClassName = cn(
    s.root,
    {
      [s.layoutA]: layout === 'A',
      [s.layoutB]: layout === 'B',
      [s.layoutC]: layout === 'C',
      [s.layoutD]: layout === 'D',
      [s.layoutNormal]: layout === 'normal',
      [s.default]: variant === 'default',
      [s.filled]: variant === 'filled',
    },
    className
  )
  return <div className={rootClassName}>{children}</div>
}

export default Grid
