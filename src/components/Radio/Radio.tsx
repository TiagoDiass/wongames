import { InputHTMLAttributes } from 'react';
import * as S from './Radio.styles';

type RadioValue = string | ReadonlyArray<string> | number;

export type RadioProps = {
  onCheck?: (value?: RadioValue) => void;
  label?: string;
  labelFor?: string;
  labelColor?: 'white' | 'black';
  value?: RadioValue;
} & InputHTMLAttributes<HTMLInputElement>;

/**
 * Radio input component (Uncontrolled component)
 */
export default function Radio({
  onCheck,
  label,
  labelFor,
  labelColor = 'white',
  value,
  ...rest
}: RadioProps) {
  const onChange = () => {
    if (onCheck) {
      onCheck(value);
    }
  };

  return (
    <S.Wrapper>
      <S.Input type='radio' id={labelFor} value={value} onChange={onChange} {...rest} />

      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  );
}
