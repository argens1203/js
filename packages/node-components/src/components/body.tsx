import * as React from 'react'
import { useGetChildrenRef } from 'store'

import { ComponentFromRef } from '../component-from-ref'
import { ComponentProps } from '../types/component-props.type'

export function Body(props: ComponentProps) {
  const { node } = props
  const { ref } = node
  const children = useGetChildrenRef(ref)
  return (
    <React.Fragment>
      {children.map((childRef) => (
        <ComponentFromRef key={childRef} nodeRef={childRef} />
      ))}
    </React.Fragment>
  )
}
