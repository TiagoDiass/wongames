type Backgrounds = 'Dark' | 'Light' | 'Light Blue';

export const setStoryDefaultBackground = (background: Backgrounds) => ({
  backgrounds: {
    default: background
  }
});

type Layouts = 'fullscreen' | 'centered' | 'padded';

export const setStoryLayout = (storyLayout: Layouts) => ({
  layout: storyLayout
});
