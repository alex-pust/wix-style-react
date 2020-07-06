import { marketingPageDriverFactory as publicDriverFactory } from '../MarketingPage.uni.driver';

export const marketingPagePrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
