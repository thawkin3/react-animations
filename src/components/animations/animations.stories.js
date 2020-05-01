import React, { useState } from 'react'
import { FadeIn } from './fade-in'
import { Button } from '../button/button'

export default {
  title: 'Global|Animations',
}

export const _FadeIn = () => {
  const [isElementVisible, setIsElementVisible] = useState(false)

  return (
    <>
      <Button
        text={isElementVisible ? 'Hide element' : 'Show element'}
        onClick={() => setIsElementVisible(!isElementVisible)}
      />
      {isElementVisible && <FadeIn />}
    </>
  )
}
