import cn from 'clsx'
import s from './Marquee.module.css'
import { Children } from 'react'
import { default as FastMarquee } from 'react-fast-marquee'



const Marquee = ({
  className = '',
  children,
  variant = 'primary',
}) => {
  const rootClassName = cn(
    s.root,
    {
      [s.primary]: variant === 'primary',
      [s.secondary]: variant === 'secondary',
    },
    className
  )

  return (
    <FastMarquee gradient={false} className={rootClassName}>
      {Children.map(children, (child) => ({
        ...child,
        props: {
          ...child.props,
          className: cn(child.props.className, `${variant}`),
        },
      }))}
    </FastMarquee>
  )
}

export default Marquee
