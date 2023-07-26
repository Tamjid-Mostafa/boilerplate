import cn from 'clsx'
import s from './Text.module.css'


const Text = ({
  style,
  className = '',
  variant = 'body',
  children,
  html,
  onClick,
}) => {
  const componentsMap = {
    body: 'div',
    heading: 'h1',
    pageHeading: 'h1',
    sectionHeading: 'h2',
    heroHeading: 'h1',
    heroBody: 'h2',
  }

  const Component = componentsMap[variant]

  const htmlContentProps = html
    ? {
        dangerouslySetInnerHTML: { __html: html },
      }
    : {}

  return (
    <Component
      className={cn(
        s.root,
        {
          [s.body]: variant === 'body',
          [s.heading]: variant === 'heading',
          [s.pageHeading]: variant === 'pageHeading',
          [s.sectionHeading]: variant === 'sectionHeading',
          [s.heroHeading]: variant === 'heroHeading',
          [s.heroBody]: variant === 'heroBody',
        },
        className
      )}
      onClick={onClick}
      style={style}
      {...htmlContentProps}
    >
      {children}
    </Component>
  )
}

export default Text
