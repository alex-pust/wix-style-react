import * as React from 'react';
import MarketingPageFeaturesFooter from '..';
import { marketingPageFeaturesFooterTestkitFactory } from '../../../testkit';
import { marketingPageFeaturesFooterTestkitFactory as marketingPageFeaturesFooterEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { marketingPageFeaturesFooterTestkitFactory as marketingPageFeaturesFooterPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function marketingPageFeaturesFooterWithMandatoryProps() {
  return <MarketingPageFeaturesFooter />;
}

function marketingPageFeaturesFooterWithAllProps() {
  return (
    <MarketingPageFeaturesFooter
      dataHook="dataHook"
    />
  );
}

async function testkits() {
  const testkit = marketingPageFeaturesFooterTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = marketingPageFeaturesFooterEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await marketingPageFeaturesFooterPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
