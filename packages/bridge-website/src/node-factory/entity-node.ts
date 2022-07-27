import { IEntityNode, DataType } from "model";
import { upsertEntity } from "../entity-slice";
import { Dispatchable } from "./dispatchable.interface";

export class EntityNode implements Dispatchable {
  constructor(input: Partial<EntityNode> = {}) {
    return Object.assign(this, input);
  }

  ref!: string;

  dataType!: DataType;

  data?: any;

  preferredPresentation?: string;

  toDispatch() {
    return upsertEntity(this);
  }

  static fromBackend(n: IEntityNode) {
    return new EntityNode(n);
  }
}
