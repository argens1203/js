import * as React from 'react'
import { EntityNode } from 'node-entity'

type Props = {
  node: EntityNode
}

export function Raw(props: Props) {
  const { node } = props
  return <div>{JSON.stringify(node)}</div>
}
