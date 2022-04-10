import * as S from './RadioGroup.styles';
import Radio, { RadioProps } from '../Radio';
import { useState } from 'react';

type RadioValue = RadioProps['value'];

type RadioGroupOption = {
  label: string;
  labelFor: string;
  value: RadioValue;
};

export type RadioGroupProps = {
  groupName: string;
  options: RadioGroupOption[];
  value?: RadioValue;
  onChange: (value: RadioValue) => void;
};

/**
 * RadioGroup Component made to handle multiple Radios
 */
export default function RadioGroup({ groupName, options, value, onChange }: RadioGroupProps) {
  const [currentValue, setCurrentValue] = useState<RadioValue>(value);

  const handleChange = (value: RadioValue) => {
    setCurrentValue(value);
    onChange(value);
  };

  return (
    <S.Wrapper role='radiogroup'>
      {options.map((radioOptions) => (
        <Radio
          key={radioOptions.labelFor}
          {...radioOptions}
          name={groupName}
          checked={currentValue === radioOptions.value}
          onCheck={handleChange}
        />
      ))}
    </S.Wrapper>
  );
}
