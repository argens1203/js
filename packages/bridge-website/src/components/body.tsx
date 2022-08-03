import { ComponentFromRef } from "./component-from-ref";
import { ComponentProps } from "./component-props.type";
import { useGetChildrenRef } from "../hooks/use-get-children-ref.hook";

export function Body(props: ComponentProps) {
  const { node } = props;
  const { ref } = node;
  const children = useGetChildrenRef(ref);
  return (
    <>
      {children.map((childRef) => (
        <ComponentFromRef key={childRef} nodeRef={childRef} />
      ))}
    </>
  );
}
