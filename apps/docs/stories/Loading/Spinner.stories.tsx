import { Story } from '@storybook/react';
import * as React from 'react';

import { Stack } from '@ratatoskr-ui/core/src/layout';
import Spinner, { SpinnerProps } from '@ratatoskr-ui/core/src/components/loading/components/Spinner';

const Title = {
  title: 'Core/Components/Loading/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      options: [16, 24, 32, 48],
    },
    label: {
      control: 'text',
    },
  },
};

const Template: Story<SpinnerProps> = ({ size, label }) => {
  return (
    <Stack direction="horizontal" spacing="lg">
      <Spinner size={size} label={label} />
    </Stack>
  );
};

export const Example = Template.bind({});
Example.args = {
  size: 24,
  label: 'Loading...',
};

export default Title;
