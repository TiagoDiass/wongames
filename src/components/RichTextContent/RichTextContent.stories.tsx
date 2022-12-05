import { ComponentMeta, ComponentStory } from '@storybook/react';
import { setStoryDefaultBackground } from 'utils/stories-utils';
import RichTextContent from './RichTextContent';
import RichTextContentMock from './RichTextContent.mock';

export default {
  title: 'RichTextContent',
  component: RichTextContent,
  parameters: {
    ...setStoryDefaultBackground('Dark')
  },
  args: RichTextContentMock
} as ComponentMeta<typeof RichTextContent>;

export const Basic: ComponentStory<typeof RichTextContent> = (args) => (
  <RichTextContent {...args} />
);
