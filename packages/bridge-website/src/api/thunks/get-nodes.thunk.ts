import { NodeFactory } from "../../node-factory/node-factory";
import { AppThunkDispatch } from "../../store/thunk.type";
import { getNodes as api, INode } from "../get-nodes/service";

export function getNodes() {
  return async function (dispatch: AppThunkDispatch) {
    const nodes: INode[] = await api();
    nodes
      .map((n) => NodeFactory.fromBackend(n))
      .map((n) => n.toDispatch())
      .flat(20)
      .forEach((d) => dispatch(d));
  };
}
