import { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import * as S from './TextField.styles';

type TextFieldProps = {
  onInput?: (value: string) => void;
  label?: string;
  labelFor?: string;
  initialValue?: string;
} & InputHTMLAttributes<HTMLInputElement>;

/**
 * TextField component that is used for user inputs
 */
export default function TextField({
  label,
  labelFor = '',
  initialValue = '',
  onInput,
  ...props
}: TextFieldProps) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    setValue(newValue);

    !!onInput && onInput(newValue);
  };

  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}

      <S.InputWrapper>
        <S.Input type='text' id={labelFor} value={value} onChange={handleChange} {...props} />
      </S.InputWrapper>
    </S.Wrapper>
  );
}
