import React, { useState } from 'react'
import { Button } from '../../button/button'
import { FadeIn } from './fade-in'
import { DrawStar } from './draw-star'
import { InnerText } from './inner-text'

export default {
  title: 'Animations|Render Props',
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

export const _DrawStar = () => {
  const [isElementVisible, setIsElementVisible] = useState(false)

  return (
    <>
      <Button
        text={isElementVisible ? 'Hide element' : 'Show element'}
        onClick={() => setIsElementVisible(!isElementVisible)}
      />
      {isElementVisible && (
        <div>
          <DrawStar />
        </div>
      )}
    </>
  )
}

export const _InnerText = () => {
  const [isElementVisible, setIsElementVisible] = useState(false)

  return (
    <>
      <Button
        text={isElementVisible ? 'Hide element' : 'Show element'}
        onClick={() => setIsElementVisible(!isElementVisible)}
      />
      {isElementVisible && <InnerText />}
    </>
  )
}
