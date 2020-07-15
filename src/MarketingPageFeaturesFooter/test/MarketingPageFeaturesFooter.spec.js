import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import MarketingPageFeaturesFooter from '../MarketingPageFeaturesFooter';
import { marketingPageFeaturesFooterPrivateDriverFactory } from './MarketingPageFeaturesFooter.private.uni.driver';

describe(MarketingPageFeaturesFooter.displayName, () => {
  const render = createRendererWithUniDriver(
    marketingPageFeaturesFooterPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<MarketingPageFeaturesFooter />);

    expect(await driver.exists()).toBe(true);
  });
});
