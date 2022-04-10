import RadioGroup, { RadioGroupProps } from './RadioGroup';
import { renderWithTheme } from 'utils/test-utils';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const radioOptions: RadioGroupProps['options'] = [
  {
    label: 'Vermelho',
    labelFor: 'red',
    value: 'red'
  },
  {
    label: 'Azul',
    labelFor: 'blue',
    value: 'blue'
  },
  {
    label: 'Amarelo',
    labelFor: 'yellow',
    value: 'yellow'
  }
];

type ColorValues = 'red' | 'blue' | 'yellow';

type RenderComponentParams = {
  defaultValue?: ColorValues;
};

const renderComponent = ({ defaultValue }: RenderComponentParams) => {
  const onChangeMock = jest.fn();

  renderWithTheme(
    <RadioGroup
      groupName='colors'
      options={radioOptions}
      onChange={onChangeMock}
      value={defaultValue}
    />
  );

  return {
    onChangeMock
  };
};

describe('Component: RadioGroup', () => {
  it('should render correctly', () => {
    renderComponent({});

    radioOptions.forEach((option) => {
      expect(screen.getByLabelText(option.label)).toBeInTheDocument();
    });
  });

  it('should render correctly with a default value specified', () => {
    renderComponent({ defaultValue: 'blue' });

    expect(screen.getByLabelText('Azul')).toBeChecked();
  });

  it('should call onChange and check the radio when user selects an option', async () => {
    const { onChangeMock } = renderComponent({});

    userEvent.click(screen.getByLabelText('Amarelo'));

    await waitFor(() => {
      expect(onChangeMock).toHaveBeenCalledTimes(1);
      expect(onChangeMock).toHaveBeenCalledWith('yellow');
      expect(screen.getByLabelText('Amarelo')).toBeChecked();
    });
  });
});
