import * as React from 'react'
import { ComponentProps } from '../types'

export function Image(props: ComponentProps) {
  const { node } = props
  return <img src={node.data} />
}
