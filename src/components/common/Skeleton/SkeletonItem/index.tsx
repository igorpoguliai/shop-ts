import { Chips, Wrapper } from "./styles";

interface ChipsProps {
  width: number | string;
  height: number;
}

export default function SkeletonItem({ width, height }: ChipsProps) {
  return (
    <Wrapper>
      <Chips style={{ width, height }} />
    </Wrapper>
  );
}
