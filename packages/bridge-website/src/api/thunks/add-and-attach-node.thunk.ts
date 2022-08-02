import { DataType } from "model";
import { EntityNode } from "node-entity";
import { RelationshipNode } from "node-relationship";
import { AppThunkDispatch } from "../../store/thunk.type";

type Input = {
  parent?: string;
  data: string;
  preferredPresentation?: string;
};

export function addAndAttachNodeThunk(input: Input) {
  return function (dispatch: AppThunkDispatch) {
    const { parent, data, preferredPresentation } = input;
    const ref = "random";
    const refRel = "reandflrefl";
    dispatch(
      new EntityNode({
        ref,
        data,
        dataType: DataType.STRING,
        preferredPresentation,
      }).toDispatch()
    );
    if (parent) {
      dispatch(
        new RelationshipNode({
          ref: refRel,
          data: { from: ref, to: parent },
        }).toDispatch()
      );
    }
    return [ref, refRel];
  };
}
