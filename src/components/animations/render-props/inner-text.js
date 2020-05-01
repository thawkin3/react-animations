import React from 'react'
import { Spring } from 'react-spring/renderprops'

export const InnerText = () => (
  <Spring from={{ number: 0 }} to={{ number: 1 }}>
    {props => <p>{props.number}</p>}
  </Spring>
)
