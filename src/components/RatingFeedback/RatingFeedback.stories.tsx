import { ComponentMeta, ComponentStory } from '@storybook/react';
import RatingFeedback from './RatingFeedback';

export default {
  title: 'RatingFeedback',
  component: RatingFeedback
} as ComponentMeta<typeof RatingFeedback>;

export const Basic: ComponentStory<typeof RatingFeedback> = () => <RatingFeedback />;
