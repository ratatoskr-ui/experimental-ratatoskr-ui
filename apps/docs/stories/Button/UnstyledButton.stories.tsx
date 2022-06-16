/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';

import { UnstyledButton } from '@ratatoskr-ui/core/src/components/button';
import { Box } from '@ratatoskr-ui/core/src/layout/box';

export default {
  title: 'Core/Components/Button/UnstyledButton',
  component: UnstyledButton,
  parameters: {
    jsx: { skip: 1 },
  },
};

export const Example = () => (
  <Box padding="sm">
    <button type="button">I&apos;m a button!</button>{' '}
    <UnstyledButton type="button">I&apos;m an unstyled button!</UnstyledButton>
  </Box>
);
