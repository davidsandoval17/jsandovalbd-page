import { Meta, StoryObj } from '@storybook/react/*';
import Button from './Button';

const meta = {
  title: 'Components/Inputs/Button',
  parameters: {
    layout: 'centered',
  },
  args: {
    children: ' Button',
  },
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    variant: 'contained',
    className: 'rounded-pill',
  },
};
