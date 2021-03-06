import React from 'react';
import { storiesOf } from '@storybook/react';

import SidebarDivider from '../SidebarDivider';
import Box from '../../Box';
import { SidebarContext } from '../../Sidebar/SidebarAPI';

const skins = ['dark', 'light'];

const tests = [
  {
    describe: 'Basic',
    its: [
      {
        it: 'Should display as inner',
        props: {},
      },
      {
        it: 'Should display as full width',
        props: {
          fullWidth: true,
        },
      },
    ],
  },
];

export const runTests = (
  { themeName, testWithTheme } = { testWithTheme: i => i },
) => {
  tests.forEach(({ describe, its }) =>
    storiesOf(`${themeName ? `${themeName}|` : ''}SidebarDivider`, module).add(
      describe,
      () =>
        testWithTheme(
          <React.Fragment>
            {its.map(({ props }) => (
              <Box backgroundColor="D70">
                {skins.map(skin => (
                  <Box direction="vertical" marginBottom={5} marginRight={5}>
                    <div style={{ width: '228px' }}>
                      <SidebarContext.Provider value={{ getSkin: () => skin }}>
                        <SidebarDivider {...props} />
                      </SidebarContext.Provider>
                    </div>
                  </Box>
                ))}
              </Box>
            ))}
          </React.Fragment>,
        ),
    ),
  );
};

runTests();
