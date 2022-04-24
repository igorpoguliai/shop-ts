import { SkeletonWrapper, Shimmer } from "./styles";

interface SkeletonProps {
  children: JSX.Element;
  background?: string;
  itemBackground?: string;
}
export default function Skeleton({
  children,
  background = "white",
  itemBackground = "whitesmoke",
}: SkeletonProps) {
  return (
    <SkeletonWrapper
      SkeletonBackground={background}
      itemBackground={itemBackground}
    >
      {children}
      <Shimmer ShimmerBackground={background} />
    </SkeletonWrapper>
  );
}
