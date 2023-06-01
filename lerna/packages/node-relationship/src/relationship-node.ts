import { IRelationshipNode } from 'model'
import { addRelationship } from './slice'
import { Dispatchable } from 'model-frontend'

export class RelationshipNode implements Dispatchable {
  constructor(input: Partial<RelationshipNode> = {}) {
    Object.assign(this, input)
  }

  ref!: string

  data!: FromTo

  static fromBackend(n: IRelationshipNode) {
    return new RelationshipNode(n)
  }

  toDispatch() {
    const { ref, data } = this
    const { from, to } = data
    return addRelationship({ ref, from, to })
  }
}

type FromTo = {
  from: string
  to: string
}
