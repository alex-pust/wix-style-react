import * as React from 'react';
import MarketingPage from '..';
import { marketingPageTestkitFactory } from '../../../testkit';
import { marketingPageTestkitFactory as marketingPageEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { marketingPageTestkitFactory as marketingPagePuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function marketingPageWithMandatoryProps() {
  return <MarketingPage />;
}

function marketingPageWithAllProps() {
  return (
    <MarketingPage
      dataHook="dataHook"
      className="className"
      buttonText="buttonText"
    />
  );
}

async function testkits() {
  const testkit = marketingPageTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = marketingPageEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await marketingPagePuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
