import { ComponentMeta, ComponentStory } from '@storybook/react';
import { setStoryDefaultBackground, setStoryLayout } from 'utils/stories-utils';
import Gallery from './Gallery';
import GalleryMock from './Gallery.mock';

export default {
  title: 'Gallery',
  component: Gallery,
  parameters: {
    ...setStoryLayout('fullscreen'),
    ...setStoryDefaultBackground('Dark')
  },
  args: GalleryMock
} as ComponentMeta<typeof Gallery>;

export const Basic: ComponentStory<typeof Gallery> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Gallery {...args} />
  </div>
);
