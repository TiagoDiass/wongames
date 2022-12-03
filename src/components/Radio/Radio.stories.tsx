/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { setDefaultBackground } from 'utils/stories-utils';
import Radio from './Radio';

export default {
  title: 'Form/Radio',
  component: Radio,
  parameters: {
    layout: 'fullscreen',
    ...setDefaultBackground('Dark')
  }
} as ComponentMeta<typeof Radio>;

export const Basic: ComponentStory<typeof Radio> = (args) => (
  <div style={{ padding: 10, display: 'flex', flexDirection: 'column', rowGap: 10 }}>
    <Radio
      name='paymentMethod'
      label='Boleto'
      labelFor='boleto'
      value='boleto'
      defaultChecked
      {...args}
    />

    <Radio
      name='paymentMethod'
      label='Cartão de Crédito'
      labelFor='creditCard'
      value='creditCard'
      {...args}
    />

    <Radio name='paymentMethod' label='Pix' labelFor='pix' value='pix' {...args} />
  </div>
);

export const Example: ComponentStory<typeof Radio> = () => {
  type GenderOptions = 'M' | 'F' | 'N/A';

  const [gender, setGender] = useState<GenderOptions>('N/A');

  // any :( | sem solução por enquanto
  const handleGenderChange = (gender: any) => {
    setGender(gender);
  };

  return (
    <div style={{ padding: 10, display: 'flex', flexDirection: 'column', rowGap: 10 }}>
      <p style={{ color: 'white' }}>Exemplo de uso do componente Radio</p>
      <p style={{ color: 'white' }}>Valor do estado de genêro: {gender}</p>

      <Radio
        name='gender'
        label='Masculinho'
        labelFor='male'
        value='M'
        onCheck={handleGenderChange}
      />

      <Radio
        name='gender'
        label='Feminino'
        labelFor='female'
        value='F'
        onCheck={handleGenderChange}
      />

      <Radio
        name='gender'
        label='Não informado'
        labelFor='na'
        value='N/A'
        defaultChecked
        onCheck={handleGenderChange}
      />
    </div>
  );
};

Example.storyName = '3 Radios Example';
