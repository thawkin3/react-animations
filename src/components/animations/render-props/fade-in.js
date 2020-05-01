import React from 'react'
import { Spring } from 'react-spring/renderprops'

export const FadeIn = () => (
  <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
    {props => <div style={{ ...props, padding: '20px' }}>hello</div>}
  </Spring>
)
