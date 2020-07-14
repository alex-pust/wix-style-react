import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';

export const marketingPageTestimonialsFooterDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),
  };
};
