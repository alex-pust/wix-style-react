import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  title,
  columns,
  divider,
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import { largeViewport, mediumViewport, smallViewport } from './examples';

import MarketingPageLayout from '..';

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

  codeExample: false,

  sections: [
    header(),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([description('Marketing Page Layout')]),

          divider(),

          title('Examples'),

          code({
            title: 'Medium Size',
            description: 'TODO: add description here...',
            compact: true,
            source: mediumViewport,
          }),

          code({
            title: 'Large Size',
            description: 'TODO: add description here...',
            compact: true,
            source: largeViewport,
          }),

          code({
            title: 'Small Size',
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
