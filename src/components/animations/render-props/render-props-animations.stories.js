import React, { useState } from 'react'
import { Button } from '../../button/button'
import { FadeIn } from './fade-in'
import { DrawStar } from './draw-star'
import { InnerText } from './inner-text'
import { TrailList } from './trail-list'

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

export const _DrawStar = () => <DrawStar />

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

export const _TrailList = () => {
  const [isElementVisible, setIsElementVisible] = useState(false)

  const items = [
    { id: 1, text: 'Clean the bathroom' },
    { id: 2, text: 'Sweep the floor' },
    { id: 3, text: 'Organize the closet' },
    { id: 4, text: 'Vacuum the living room' },
    { id: 5, text: 'Walk the dog' },
  ]

  return (
    <>
      <Button
        text={isElementVisible ? 'Hide element' : 'Show element'}
        onClick={() => setIsElementVisible(!isElementVisible)}
      />
      {isElementVisible && <TrailList items={items} />}
    </>
  )
}
