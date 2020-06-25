import React from 'react';
import { storiesOf } from '@storybook/react';
import StarsRatingBar from '../StarsRatingBar';

const commonProps = {
  value: 3,
};

const tests = [
  {
    describe: 'size',
    its: [
      {
        it: 'tiny- (read only mode)',
        props: {
          size: 'tiny',
          readOnly: true,
        },
      },
      {
        it: 'small- (read only mode)',
        props: {
          size: 'small',
          readOnly: true,
        },
      },
      {
        it: 'medium- (read only mode)',
        props: {
          size: 'medium',
          readOnly: true,
        },
      },
      {
        it: 'large- (read only mode)',
        props: {
          size: 'large',
          readOnly: true,
        },
      },
      {
        it: 'large - (interactive mode)',
        props: {
          size: 'large',
        },
      },
    ],
  },
  {
    describe: 'rate captions',
    its: [
      {
        it: 'example',
        props: {
          rateCaptions: ['bad', 'not good', 'ok', 'good', 'excellent'],
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${StarsRatingBar.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <StarsRatingBar {...commonProps} {...props} />);
  });
});
