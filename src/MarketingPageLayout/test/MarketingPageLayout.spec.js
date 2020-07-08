import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import MarketingPageLayout from '../MarketingPageLayout';
import { marketingPageLayoutPrivateDriverFactory } from './MarketingPageLayout.private.uni.driver';

describe(MarketingPageLayout.displayName, () => {
  const render = createRendererWithUniDriver(
    marketingPageLayoutPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<MarketingPageLayout />);

    expect(await driver.exists()).toBe(true);
    expect(await driver.getButtonText()).toEqual('Click me!');
  });

  it('should increment', async () => {
    const { driver } = render(<MarketingPageLayout />);

    await driver.clickButton();
    await driver.clickButton();

    expect(await driver.getCountText()).toEqual(
      'You clicked this button even number (2) of times',
    );
  });

  it('should allow changing the button text', async () => {
    const { driver } = render(<MarketingPageLayout buttonText="Press me" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
