import Skeleton from "../common/Skeleton";
import SkeletonItem from "../common/Skeleton/SkeletonItem";
import { WrapperChips, MyFlex, Container } from "./styles";

export default function MyLoader() {
  return (
    <Skeleton background={"#E5E5E5"}>
      <>
        <WrapperChips>
          <SkeletonItem width={80} height={50} background={"#e8e8e8"} />
          <SkeletonItem width={80} height={50} background={"#e8e8e8"} />
          <SkeletonItem width={80} height={50} background={"#e8e8e8"} />
          <SkeletonItem width={80} height={50} background={"#e8e8e8"} />
          <SkeletonItem width={80} height={50} background={"#e8e8e8"} />
        </WrapperChips>
        <MyFlex column>
          <SkeletonItem width={"100%"} height={50} background={"#e8e8e8"} />
          <SkeletonItem width={"100%"} height={400} background={"#e8e8e8"} />
          <SkeletonItem width={"100%"} height={400} background={"#e8e8e8"} />
        </MyFlex>
      </>
    </Skeleton>
  );
}
