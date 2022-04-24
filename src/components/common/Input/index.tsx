import { InputWrapper, InputStyles } from "./styles";
import { ReactComponent as LoupeIcon } from "./icons/loupe.svg";
import { ChangeEventHandler } from "react";

interface PropsInput {
  text: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  value: string | number;
}

export default function Input({ text, onChange, value }: PropsInput) {
  return (
    <InputWrapper>
      <InputStyles onChange={onChange} value={value} placeholder={text} />
      <LoupeIcon />
    </InputWrapper>
  );
}
