import React from 'react'
import { Trail } from 'react-spring/renderprops'

export const TrailList = ({ items = [] }) => {
  const styles = {
    position: 'relative',
    background: 'lightblue',
    padding: '10px 20px',
    borderRadius: '4px',
  }

  return (
    <div style={{ width: '300px' }}>
      <Trail
        items={items}
        keys={item => item.id}
        from={{ opacity: 0, transform: 'translateX(-100px)' }}
        to={{ opacity: 1, transform: 'translateX(0px)' }}
      >
        {item => props => <p style={{ ...props, ...styles }}>{item.text}</p>}
      </Trail>
    </div>
  )
}
