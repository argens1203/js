import React, { ComponentType } from 'react'

import { EntityNode } from 'node-entity'
import { DataType } from 'model'

import { Article, Raw, Title, Body, Image, Sketch } from './components'
import { ComponentProps } from './types'

export function Component(props: ComponentProps) {
  const { node } = props
  return React.createElement(componentFactory(node), {
    node
  })
}

function componentFactory(
  node?: EntityNode
): ComponentType<{ node: EntityNode }> {
  switch (node?.preferredPresentation) {
    case 'ARTICLE':
      return Article
    case 'TITLE':
      return Title
    case 'BODY':
      return Body
    case 'DEBUG':
      return Raw
    case 'IMAGE':
      return Image
    case 'LINK':
    default:
      if (node?.dataType === DataType.STRING) {
        return Sketch
      }
      return Raw
  }
}
