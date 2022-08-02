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
      data: "Two-Over-One GF -- Part 1 (Introduction)",
    },
    {
      dataType: DataType.COLLECTION,
      ref: "N3",
      nodeType: NodeType.ENTITY,
      preferredPresentation: "BODY",
    },
    {
      nodeType: NodeType.RELATIONSHIP,
      ref: "REL-2",
      data: {
        from: "N3",
        to: "NODE-1",
      },
    },
    {
      dataType: DataType.STRING,
      ref: "N4",
      nodeType: NodeType.ENTITY,
      data: "Did any of you play bridge in the 1960's? You don't have to admit it. ",
    },
    {
      nodeType: NodeType.RELATIONSHIP,
      ref: "REL-3",
      data: {
        from: "N4",
        to: "N3",
      },
    },
  ];
}
