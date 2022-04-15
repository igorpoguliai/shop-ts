import SkeletonItem from "./SkeletonItem";
import { MyFlex, WrapperChips, WrapperSkeleton } from "./styles";

export default function Skeleton() {
  return (
    <WrapperSkeleton>
      <WrapperChips>
        <SkeletonItem width={80} height={50} />
        <SkeletonItem width={80} height={50} />
        <SkeletonItem width={80} height={50} />
        <SkeletonItem width={80} height={50} />
        <SkeletonItem width={80} height={50} />
      </WrapperChips>
      <MyFlex column>
        <SkeletonItem width={"100%"} height={50} />
        <SkeletonItem width={"100%"} height={400} />
        <SkeletonItem width={"100%"} height={400} />
      </MyFlex>
    </WrapperSkeleton>
  );
}
