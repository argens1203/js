import { ComponentProps } from "./component-props.type";

export function Image(props: ComponentProps) {
  const { node } = props;
  return <img src={node.data} />;
}
