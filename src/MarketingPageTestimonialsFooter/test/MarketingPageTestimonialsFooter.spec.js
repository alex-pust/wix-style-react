import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import MarketingPageTestimonialsFooter from '../MarketingPageTestimonialsFooter';
import { marketingPageTestimonialsFooterPrivateDriverFactory } from './MarketingPageTestimonialsFooter.private.uni.driver';

describe(MarketingPageTestimonialsFooter.displayName, () => {
  const render = createRendererWithUniDriver(
    marketingPageTestimonialsFooterPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<MarketingPageTestimonialsFooter />);

    expect(await driver.exists()).toBe(true);
    expect(await driver.getButtonText()).toEqual('Click me!');
  });

  it('should increment', async () => {
    const { driver } = render(<MarketingPageTestimonialsFooter />);

    await driver.clickButton();
    await driver.clickButton();

    expect(await driver.getCountText()).toEqual(
      'You clicked this button even number (2) of times',
    );
  });

  it('should allow changing the button text', async () => {
    const { driver } = render(
      <MarketingPageTestimonialsFooter buttonText="Press me" />,
    );

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
