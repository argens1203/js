import { sleep } from "common-utils";
import { IEntityNode, NodeType } from "model";
import { generate as uuid } from "short-uuid";
import { EntityNode } from "node-entity";
import { RelationshipNode } from "node-relationship";

export async function createNode(input: Omit<IEntityNode, "ref">) {
  await sleep(100);
  if (input.nodeType === NodeType.RELATIONSHIP) {
    return new RelationshipNode({ ref: uuid(), ...input });
  } else {
    return new EntityNode({ ref: uuid(), ...input });
  }
}
