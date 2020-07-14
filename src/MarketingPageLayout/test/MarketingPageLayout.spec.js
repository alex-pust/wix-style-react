import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import MarketingPageLayout from '../MarketingPageLayout';
import { marketingPageLayoutPrivateDriverFactory } from './MarketingPageLayout.private.uni.driver';
import MarketingPageTestimonialsFooter from '../../MarketingPageTestimonialsFooter';
import Image from '../../Image';

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
    // expect(await driver.getButtonText()).toEqual('Click me!');
  });

  it('should have overline', async () => {
    const overlineText = 'Test Overline';
    const { driver } = render(<MarketingPageLayout overline={overlineText} />);
    expect(await driver.hasOverline()).toBeTruthy();
    expect(await driver.getOverlineText()).toEqual(overlineText);
  });

  it('should have header', async () => {
    const headerText = 'Test Header';
    const { driver } = render(<MarketingPageLayout header={headerText} />);
    expect(await driver.hasHeader()).toBeTruthy();
    expect(await driver.getHeaderText()).toEqual(headerText);
  });

  it('should have subtitle', async () => {
    const subtitleText = 'Test Subtitle';
    const { driver } = render(<MarketingPageLayout subtitle={subtitleText} />);
    expect(await driver.hasSubtitle()).toBeTruthy();
    expect(await driver.getSubtitleText()).toEqual(subtitleText);
  });

  it('should have text items', async () => {
    const textItems = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ];
    const { driver } = render(<MarketingPageLayout content={textItems} />);
    expect(await driver.getTextContentItemsCount()).toEqual(textItems.length);
  });

  it('should have footer', async () => {
    const { driver } = render(
      <MarketingPageLayout footer={<MarketingPageTestimonialsFooter />} />,
    );
    expect(await driver.hasFooter()).toBeTruthy();
  });

  it('should have image', async () => {
    const { driver } = render(<MarketingPageLayout image={<Image />} />);
    expect(await driver.hasImage()).toBeTruthy();
  });

  it('should hide image when size is small', async () => {
    const { driver } = render(
      <MarketingPageLayout size="small" image={<Image />} />,
    );
    expect(await driver.hasImage()).toBeFalsy();
  });
});
