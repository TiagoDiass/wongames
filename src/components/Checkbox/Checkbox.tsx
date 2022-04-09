import { InputHTMLAttributes, useState } from 'react';
import * as S from './Checkbox.styles';

export type CheckboxProps = {
  onCheck?: (status: boolean) => void;
  isChecked?: boolean;
  label?: string;
  labelFor?: string;
  labelColor?: 'white' | 'black';
  value?: string | ReadonlyArray<string> | number;
} & InputHTMLAttributes<HTMLInputElement>;

/**
 * Checkbox component
 */
export default function Checkbox({
  onCheck,
  isChecked = false,
  label,
  labelFor = '',
  labelColor = 'white',
  value,
  ...rest
}: CheckboxProps) {
  const [checked, setChecked] = useState(isChecked);

  const onChange = () => {
    const status = !checked;

    setChecked(status);

    if (onCheck) {
      onCheck(status);
    }
  };

  return (
    <S.Wrapper>
      <S.Input
        type='checkbox'
        id={labelFor}
        onChange={onChange}
        checked={checked}
        value={value}
        {...rest}
      />
      {!!label && (
        <S.Label labelColor={labelColor} htmlFor={labelFor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  );
}
