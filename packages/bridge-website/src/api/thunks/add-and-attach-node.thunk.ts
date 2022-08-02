import { DataType, NodeType } from "model";
import { EntityNode } from "node-entity";
import { RelationshipNode } from "node-relationship";
import { AppThunkDispatch } from "../../store/thunk.type";
import { createNode } from "../create-node.service";

type Input = {
  parent?: string;
  data: string;
  preferredPresentation?: string;
};

export function addAndAttachNodeThunk(input: Input) {
  return async function (dispatch: AppThunkDispatch) {
    const { parent, data, preferredPresentation } = input;
    const entityNode = await createNode({
      nodeType: NodeType.ENTITY,
      data,
      dataType: DataType.STRING,
      preferredPresentation,
    });
    let refRel = "";
    dispatch(entityNode.toDispatch());
    if (parent) {
      const relationshipNode = await createNode({
        dataType: DataType.COLLECTION,
        nodeType: NodeType.RELATIONSHIP,
        data: { from: entityNode.ref, to: parent },
      });
      refRel = relationshipNode.ref;
      dispatch(relationshipNode.toDispatch());
    }
    return [entityNode.ref, refRel];
  };
}
