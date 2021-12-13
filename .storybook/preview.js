export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'padded',
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Overview', 'Typography', 'Components'],
    },
  },
};
