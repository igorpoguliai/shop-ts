import { Item } from "./styles";

interface ItemProps {
  width: number | string;
  height: number | string;
  background?: string;
}

export default function SkeletonItem({
  width,
  height,
  background = "whitesmoke",
}: ItemProps) {
  return <Item style={{ width, height, background }} />;
}
