import { MouseEventHandler } from "react";
import { ChipsStyles } from "./styles";

interface ChipsProps {
  children: string;
  isActive: boolean;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Chips({ children, isActive, handleClick }: ChipsProps) {
  return (
    <ChipsStyles onClick={handleClick} isActive={isActive}>
      {children}
    </ChipsStyles>
  );
}
