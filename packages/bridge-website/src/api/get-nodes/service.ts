import { sleep } from "common-utils";
import { IEntityNode, DataType, NodeType, IRelationshipNode } from "model";

export type INode = IEntityNode | IRelationshipNode;

export async function getNodes(): Promise<INode[]> {
  await sleep(100);
  return [
    {
      nodeType: NodeType.RELATIONSHIP,
      ref: "REL-1",
      data: {
        from: "NODE-2",
        to: "NODE-1",
      },
    },
    {
      dataType: DataType.COLLECTION,
      ref: "NODE-1",
      nodeType: NodeType.ENTITY,
      preferredPresentation: "ARTICLE",
    },
    {
      dataType: DataType.STRING,
      ref: "NODE-2",
      nodeType: NodeType.ENTITY,
      preferredPresentation: "TITLE",
      data: "TWO-OVER-ONE GAME FORCING",
    },
  ];
}
