import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import MarketingPage from '../MarketingPage';
import { marketingPagePrivateDriverFactory } from './MarketingPage.private.uni.driver';

describe(MarketingPage.displayName, () => {
  const render = createRendererWithUniDriver(marketingPagePrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<MarketingPage />);

    expect(await driver.exists()).toBe(true);
    expect(await driver.getButtonText()).toEqual('Click me!');
  });

  it('should increment', async () => {
    const { driver } = render(<MarketingPage />);

    await driver.clickButton();
    await driver.clickButton();

    expect(await driver.getCountText()).toEqual(
      'You clicked this button even number (2) of times',
    );
  });

  it('should allow changing the button text', async () => {
    const { driver } = render(<MarketingPage buttonText="Press me" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
