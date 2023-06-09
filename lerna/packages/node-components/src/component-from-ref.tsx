import * as React from 'react'

import { useAppSelector } from 'store'
import { RootState } from 'store'
import { Component } from './component'

type Props = {
  nodeRef: string
}

export function ComponentFromRef(props: Props) {
  const { nodeRef } = props
  const node = useAppSelector(
    (state: RootState) => state.entity.lookup[nodeRef]
  )
  return <Component node={node} />
}
