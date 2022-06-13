import { InputWrapper, InputStyles } from "./styles";
import { ChangeEventHandler } from "react";

interface InputProps {
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export default function Input({
  placeholder,
  onChange,
  value,
  Icon,
}: InputProps) {
  return (
    <InputWrapper>
      <InputStyles
        type="number"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
      {Icon && <Icon />}
    </InputWrapper>
  );
}
