import { InputWrapper, InputStyles } from "./styles";
import { ChangeEventHandler } from "react";

interface InputProps {
  text: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export default function Input({ text, onChange, value, Icon }: InputProps) {
  return (
    <InputWrapper>
      <InputStyles
        type="number"
        onChange={onChange}
        value={value}
        placeholder={text}
      />
      {Icon && <Icon />}
    </InputWrapper>
  );
}
