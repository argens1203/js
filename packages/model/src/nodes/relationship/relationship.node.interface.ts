import { INode } from '../node.interface';

export interface IRelationshipNode extends INode {
  ref: string;
  data: {
    from: string;
    to: string;
  };
}
