import { IEntityNode, IRelationshipNode, NodeType } from "model";
import { INode } from "../api/get-nodes/service";
import { BaseNode } from "./base-node";
import { Dispatchable } from "./dispatchable.interface";
import { EntityNode } from "./entity-node";
import { RelationshipNode } from "./relationship-node";

export class NodeFactory {
  static fromBackend(n: INode): Dispatchable {
    switch (n.nodeType) {
      case NodeType.ENTITY:
        return EntityNode.fromBackend(n as IEntityNode);
      case NodeType.RELATIONSHIP:
        return RelationshipNode.fromBackend(n as IRelationshipNode);
      default:
        return BaseNode.fromBackend();
    }
  }
}
