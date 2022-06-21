import { Story } from '@storybook/react';
import * as React from 'react';

import { IconButtonProps, IconButton } from '@ratatoskr-ui/core/src/components/button/components/IconButton';

const Title = {
  title: 'Core/Components/Button/IconButton',
  component: IconButton,
  argTypes: {
    variant: {
      options: [
        'primary',
        'secondary',
        'outline-destructive',
        'plain',
        'plain-destructive',
      ],
    },
    size: {
      options: ['sm', 'md', 'lg'],
    },
    onClick: {
      action: 'clicked',
    },
    selected: {
      control: 'boolean',
    },
  },
};

export const Example: Story<IconButtonProps> = ({
  variant,
  size,
  disabled,
  onClick,
  selected,
}) => (
  <IconButton
    type="button"
    aria-label="Push Me"
    onClick={onClick}
    variant={variant}
    size={size}
    disabled={disabled}
    selected={selected}
  ></IconButton>
);
Example.args = {
  variant: 'primary',
  size: 'md',
};

export default Title;
