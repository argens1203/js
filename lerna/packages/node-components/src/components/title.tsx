import * as React from 'react'
import { ComponentProps } from '../types/component-props.type'

export function Title(props: ComponentProps) {
  const { node } = props
  const { data } = node
  return <h1>{data}</h1>
}
