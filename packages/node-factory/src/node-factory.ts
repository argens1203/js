import { IEntityNode, INode, IRelationshipNode, NodeType } from 'model'
import { Dispatchable, BaseNode } from 'model-frontend'
import { EntityNode } from 'node-entity'
import { RelationshipNode } from 'node-relationship'

export class NodeFactory {
  static fromBackend(n: INode): Dispatchable {
    switch (n.nodeType) {
      case NodeType.ENTITY:
        return EntityNode.fromBackend(n as IEntityNode)
      case NodeType.RELATIONSHIP:
        return RelationshipNode.fromBackend(n as IRelationshipNode)
      default:
        return BaseNode.fromBackend()
    }
  }
}
