import { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import * as S from './TextField.styles';

export type TextFieldProps = {
  onInput?: (value: string) => void;
  label?: string;
  labelFor?: string;
  initialValue?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
} & InputHTMLAttributes<HTMLInputElement>;

/**
 * TextField component that is used for user inputs
 */
export default function TextField({
  label,
  labelFor = '',
  initialValue = '',
  onInput,
  disabled = false,
  icon,
  iconPosition = 'left',
  ...props
}: TextFieldProps) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    setValue(newValue);

    !!onInput && onInput(newValue);
  };

  return (
    <S.Wrapper disabled={disabled}>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}

      <S.InputWrapper iconPosition={iconPosition}>
        {!!icon && <S.Icon>{icon}</S.Icon>}
        <S.Input
          type='text'
          id={labelFor}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          {...props}
        />
      </S.InputWrapper>
    </S.Wrapper>
  );
}
