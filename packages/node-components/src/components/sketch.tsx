import * as React from 'react'
import { ComponentProps } from '../types/component-props.type'

export function Sketch(props: ComponentProps) {
  const { node } = props
  return <h5>{node.data}</h5>
}
