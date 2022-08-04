import { ComponentFromRef } from "./component-from-ref";
import { ComponentProps } from "./component-props.type";
import { useGetChildrenRef } from "store";

export function Article(props: ComponentProps) {
  const { node } = props;
  const { dataType, ref } = node;
  const children = useGetChildrenRef(ref);
  return (
    <>
      {children.map((childRef) => (
        <ComponentFromRef key={childRef} nodeRef={childRef} />
      ))}
    </>
  );
}
