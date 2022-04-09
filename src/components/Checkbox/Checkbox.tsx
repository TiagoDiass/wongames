import * as S from './Checkbox.styles';

export type CheckboxProps = {
  label?: string;
  labelFor?: string;
  labelColor?: 'white' | 'black';
};

/**
 * Checkbox component
 */
export default function Checkbox({ label, labelFor = '', labelColor = 'white' }: CheckboxProps) {
  return (
    <S.Wrapper>
      <S.Input type='checkbox' id={labelFor} />
      {!!label && (
        <S.Label labelColor={labelColor} htmlFor={labelFor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  );
}
