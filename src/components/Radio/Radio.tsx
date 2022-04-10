import { InputHTMLAttributes } from 'react';
import RadioGroup, { RadioGroupProps } from './Group/RadioGroup';
import * as S from './Radio.styles';

type RadioValue = string | ReadonlyArray<string> | number;

export type RadioProps = {
  onCheck?: (value?: RadioValue) => void;
  label?: string;
  labelFor?: string;
  labelColor?: 'white' | 'black';
  value?: RadioValue;
} & InputHTMLAttributes<HTMLInputElement>;

interface CompoundedRadio extends React.FunctionComponent<RadioProps> {
  Group: React.FunctionComponent<RadioGroupProps>;
}

/**
 * Radio input component (Uncontrolled component)
 */
const Radio: CompoundedRadio = ({
  onCheck,
  label,
  labelFor,
  labelColor = 'white',
  value,
  ...rest
}: RadioProps) => {
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
};

Radio.Group = RadioGroup;

export default Radio;
