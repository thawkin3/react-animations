import React from 'react'
import { useSpring, animated } from 'react-spring'

export const InnerText = () => {
  const props = useSpring({ number: 1, from: { number: 0 } })
  return <animated.p>{props.number}</animated.p>
}
