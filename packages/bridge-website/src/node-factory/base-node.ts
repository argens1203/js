import { noOp } from "../entity-slice";
import { Dispatchable } from "./dispatchable.interface";

export class BaseNode implements Dispatchable {
  static fromBackend() {
    return new BaseNode();
  }

  toDispatch() {
    return noOp();
  }
}
