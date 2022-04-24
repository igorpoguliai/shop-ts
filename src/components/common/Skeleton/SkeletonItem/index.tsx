import { Item } from "./styles";

interface ItemProps {
  width: number | string;
  height: number | string;
}

export default function SkeletonItem({ width, height }: ItemProps) {
  return <Item style={{ width, height }} />;
}
