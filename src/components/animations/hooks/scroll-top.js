import React from 'react'
import { useSpring, animated } from 'react-spring'

// TODO: This doesn't seem to be working properly

export const ScrollTop = () => {
  const props = useSpring({ scroll: 1, from: { scroll: 0 } })

  return (
    <animated.div scrollTop={props.scroll} style={{ color: 'rgb(45, 55, 71)' }}>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '60px',
          overflow: 'scroll',
        }}
      >
        <div style={{ width: '100%', height: '50px', textAlign: 'center' }}>
          hello
        </div>
        <div style={{ width: '100%', height: '50px', textAlign: 'center' }}>
          hello
        </div>
        <div style={{ width: '100%', height: '50px', textAlign: 'center' }}>
          hello
        </div>
        <div style={{ width: '100%', height: '50px', textAlign: 'center' }}>
          hello
        </div>
        <div style={{ width: '100%', height: '50px', textAlign: 'center' }}>
          hello
        </div>
        <div style={{ width: '100%', height: '50px', textAlign: 'center' }}>
          hello
        </div>
        <div style={{ width: '100%', height: '50px', textAlign: 'center' }}>
          hello
        </div>
        <div style={{ width: '100%', height: '50px', textAlign: 'center' }}>
          hello
        </div>
      </div>
    </animated.div>
  )
}
