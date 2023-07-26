import cn from 'clsx'
import React, { useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { ChevronRight } from '@components/icons'
import useMeasure from 'react-use-measure'
import s from './Collapse.module.css'


const Collapse = ({ title, children }) => {
  const [isActive, setActive] = useState(false)
  const [ref, { height: viewHeight }] = useMeasure()

  const animationControls = useAnimation()

  const toggle = async () => {
    setActive((x) => !x)
    await animationControls.start({ height: isActive ? 0 : viewHeight, opacity: isActive ? 0 : 1 })
  }

  return (
    <div
      className={s.root}
      role="button"
      tabIndex={0}
      aria-expanded={isActive}
      onClick={toggle}
    >
      <div className={s.header}>
        <ChevronRight className={cn(s.icon, { [s.open]: isActive })} />
        <span className={s.label}>{title}</span>
      </div>
      <motion.div style={{ overflow: 'hidden' }} initial={{ height: 0, opacity: 0 }} animate={animationControls}>
        <div ref={ref} className={s.content}>
          {children}
        </div>
      </motion.div>
    </div>
  )
}

export default React.memo(Collapse)
