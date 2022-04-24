import Skeleton from "../common/Skeleton";
import SkeletonItem from "../common/Skeleton/SkeletonItem";
import { ChipsWrapper, MyFlex, Container } from "./styles";

export default function MyLoader() {
  return (
    <Skeleton background={"#F1F5FB"} itemBackground={"#e8e8e8"}>
      <Container>
        <ChipsWrapper>
          <SkeletonItem width={80} height={50} />
          <SkeletonItem width={80} height={50} />
          <SkeletonItem width={80} height={50} />
          <SkeletonItem width={80} height={50} />
          <SkeletonItem width={80} height={50} />
        </ChipsWrapper>
        <MyFlex column>
          <SkeletonItem width={"100%"} height={50} />
          <SkeletonItem width={"100%"} height={400} />
          <SkeletonItem width={"100%"} height={400} />
        </MyFlex>
      </Container>
    </Skeleton>
  );
}
