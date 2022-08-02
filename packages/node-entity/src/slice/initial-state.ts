import { EntityNode } from '../entity-node'

const initialEntityLookup: {
  [id: string]: EntityNode
} = {}

export const initialEntityState = {
  lookup: initialEntityLookup
}
export type EntityState = typeof initialEntityState
