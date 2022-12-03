type Backgrounds = 'Dark' | 'Light' | 'Light Blue';

export const setDefaultBackground = (background: Backgrounds) => ({
  backgrounds: {
    default: background
  }
});
