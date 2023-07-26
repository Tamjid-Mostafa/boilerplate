import { useRef } from 'react'
import { useUserAvatar } from '@lib/hooks/useUserAvatar'


const Avatar= ({}) => {
  let ref = useRef()
  let { userAvatar } = useUserAvatar()

  return (
    <div
      ref={ref}
      style={{ backgroundImage: userAvatar }}
      className="inline-block h-8 w-8 rounded-full border-2 border-primary hover:border-secondary focus:border-secondary transition-colors ease-linear"
    >
      {/* Add an image - We're generating a gradient as placeholder  <img></img> */}
    </div>
  )
}

export default Avatar
