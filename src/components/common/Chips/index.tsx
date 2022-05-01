import { Chip, ChipsWrapper } from "./styles";

export interface ChipItemType {
  value: string | number;
  label: string;
}

interface ChipsProps {
  items: ChipItemType[];
  activeValue: string | number | null;
  onClick: (item: ChipItemType) => void;
}

export default function Chips({ items, activeValue, onClick }: ChipsProps) {
  return (
    <ChipsWrapper>
      {items.map((item) => (
        <Chip
          key={item.value}
          onClick={() => onClick(item)}
          isActive={item.value === activeValue}
        >
          {item.label}
        </Chip>
      ))}
    </ChipsWrapper>
  );
}
