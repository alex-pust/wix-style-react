import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  example as baseExample,
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import {
  defaultViewport,
  largeViewport,
  mediumViewport,
  smallViewport,
} from './examples';

import MarketingPageLayout from '..';

const example = config => baseExample({ components: allComponents, ...config });
const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: MarketingPageLayout,
  componentPath: '..',

  componentProps: {},

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'This line here should briefly describe component in just a sentence or two. It should be short and easy to read.',
          }),

          // importExample(),

          divider(),

          title('Examples'),

          code({
            title: 'Large Viewport',
            description: 'TODO: add description here...',
            compact: true,
            source: largeViewport,
          }),

          code({
            title: 'Medium Viewport',
            description: 'TODO: add description here...',
            compact: true,
            source: mediumViewport,
          }),

          code({
            title: 'Small Viewport',
            description: 'TODO: add description here...',
            compact: true,
            source: smallViewport,
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
