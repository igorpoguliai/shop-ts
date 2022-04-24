import { InputWrapper, InputStyles } from "./styles";
import { ChangeEventHandler } from "react";

interface InputProps {
  text: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  value: string;
  icon: React.ReactNode;
}

export default function Input({
  text,
  onChange,
  value,
  icon: Icon,
}: InputProps) {
  return (
    <InputWrapper>
      <InputStyles onChange={onChange} value={value} placeholder={text} />
      {Icon && <Icon />}
    </InputWrapper>
  );
}
