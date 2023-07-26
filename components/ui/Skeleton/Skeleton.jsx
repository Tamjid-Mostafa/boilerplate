import React from 'react'
import cn from 'clsx'
import px from '@lib/to-pixels'
import s from './Skeleton.module.css'


const Skeleton = ({
  style,
  width,
  height,
  children,
  className,
  show = true,
  boxHeight = height,
}) => {
  // Automatically calculate the size if there are children
  // and no fixed sizes are specified
  const shouldAutoSize = !!children && !(width || height)

  // Defaults
  width = width || 24
  height = height || 24
  boxHeight = boxHeight || height

  return (
    <span
      className={cn(s.skeleton, className, {
        [s.show]: show,
        [s.wrapper]: shouldAutoSize,
        [s.loaded]: !shouldAutoSize && !!children,
      })}
      style={
        shouldAutoSize
          ? {}
          : {
              minWidth: px(width),
              minHeight: px(height),
              marginBottom: `calc(${px(boxHeight)} - ${px(height)})`,
              ...style,
            }
      }
    >
      {children}
    </span>
  )
}

export default Skeleton