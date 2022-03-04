import { DICTIONARIES } from '@config/translationStrings';
import { Dictionary } from 'custom';

export default {
  dictionaries: {
    fetch: async (locale): Promise<Dictionary> =>
      DICTIONARIES[locale] || DICTIONARIES['default'],
  },
};
