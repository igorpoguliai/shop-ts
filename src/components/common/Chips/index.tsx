import { MouseEventHandler } from "react";
import { Chip } from "./styles";

interface ChipsProps {
  children: string;
  isActive: boolean;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Chips({ children, isActive, handleClick }: ChipsProps) {
  return (
    <Chip onClick={handleClick} isActive={isActive}>
      {children}
    </Chip>
  );
}
