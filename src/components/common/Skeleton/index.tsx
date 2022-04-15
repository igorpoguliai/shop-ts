import { StylesSkeleton, WrapperSkeleton } from "./styles";

interface PropsSkeleton {
  children: JSX.Element;
  background?: string;
}
export default function Skeleton({
  children,
  background = "white",
}: PropsSkeleton) {
  return (
    <WrapperSkeleton style={{ background }}>
      <StylesSkeleton>{children}</StylesSkeleton>
    </WrapperSkeleton>
  );
}
