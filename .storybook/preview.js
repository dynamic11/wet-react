import anysort from 'anysort';

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
    storySort: (previous, next) => {
      const [_previousStory, previousMeta] = previous;
      const [_nextStory, nextMeta] = next;

      return anysort(previousMeta.kind, nextMeta.kind, [
        'Overview/**',
        'Typography/**/Intro',
        'Typography/**',
        'Components/**/Intro',
        'Components/**',
      ]);
    },
  },
};
