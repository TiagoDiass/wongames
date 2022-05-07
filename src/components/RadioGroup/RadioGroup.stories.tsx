import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import RadioGroup, { RadioGroupProps } from './RadioGroup';

export default {
  title: 'Form/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'Dark'
    }
  }
} as ComponentMeta<typeof RadioGroup>;

export const Basic: ComponentStory<typeof RadioGroup> = (args) => {
  const [favoriteColor, setFavoriteColor] = useState('blue');

  const handleFavoriteColorChange = (color: string) => {
    setFavoriteColor(color);
  };

  return (
    <div style={{ padding: 10, display: 'flex', flexDirection: 'column', rowGap: 10 }}>
      <p style={{ color: 'white' }}>Exemplo de uso do componente RadioGroup</p>
      <p style={{ color: 'white' }}>Valor do estado de cor favorita: {favoriteColor}</p>

      <RadioGroup
        {...args}
        groupName='favoriteColor'
        options={[
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
        ]}
        value={favoriteColor}
        onChange={handleFavoriteColorChange as RadioGroupProps['onChange']}
      />
    </div>
  );
};
