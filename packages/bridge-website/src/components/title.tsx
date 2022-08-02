import { ComponentProps } from "./component-props.type";

export function Title(props: ComponentProps) {
  const { node } = props;
  const { data, dataType } = node;
  return <h1>{data}</h1>;
}
