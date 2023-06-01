import { DataType, NodeType } from "model";
import { AppThunkDispatch } from "store";
import { createNode } from "../create-node.service";

type Input = {
  parent?: string;
  data?: string;
  preferredPresentation?: string;
  dataType?: DataType;
};

export function addAndAttachImage(input: Input) {
  return addAndAttachNodeThunk({ ...input, preferredPresentation: "IMAGE" });
}

export function addAndAttachNodeThunk(input: Input) {
  return async function (dispatch: AppThunkDispatch) {
    const {
      parent,
      data,
      preferredPresentation,
      dataType = DataType.STRING,
    } = input;
    const entityNode = await createNode({
      nodeType: NodeType.ENTITY,
      data,
      dataType,
      preferredPresentation,
    });
    dispatch(entityNode.toDispatch());
    if (parent) {
      const relationshipNode = await createNode({
        dataType: DataType.COLLECTION,
        nodeType: NodeType.RELATIONSHIP,
        data: { from: entityNode.ref, to: parent },
      });
      dispatch(relationshipNode.toDispatch());
    }
    return entityNode.ref;
  };
}
