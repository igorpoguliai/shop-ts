import { WrapperSkeleton, Shimmer } from "./styles";

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
      {children}
      <Shimmer />
    </WrapperSkeleton>
  );
}
