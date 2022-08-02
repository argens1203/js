import { useAppSelector } from "../store/hooks";

export function useGetChildrenRef(ref: string) {
  const childrenObj = useAppSelector(
    (state) => state.relationship.backwardQuery[ref]
  );
  const children = Object.keys(childrenObj) || [];
  return children;
}
