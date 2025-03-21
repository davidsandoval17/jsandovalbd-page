import { Meta, StoryObj } from '@storybook/react/*';
import Button from './Button';
import { IoMdMicOff } from 'react-icons/io';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Inputs/Button',
  parameters: {
    layout: 'centered',
  },
  args: {
    children: ' Button',
    onClick: fn(),
    disabled: false,
  },
  component: Button,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['contained', 'text', 'outlined'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    variant: 'contained',
  },
};

export const Variant: Story = {
  render: ({ children, ...args }) => {
    return (
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button variant='contained' {...args}>
          {children}
        </Button>
        <Button variant='outlined' {...args}>
          {children}
        </Button>
        <Button variant='text' {...args}>
          {children}
        </Button>
      </div>
    );
  },
};

export const Size: Story = {
  args: {
    variant: 'outlined',
  },
  render: ({ children, ...args }) => {
    return (
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button size='sm' {...args}>
          {children}
        </Button>
        <Button size='md' {...args}>
          {children}
        </Button>
        <Button size='lg' {...args}>
          {children}
        </Button>
      </div>
    );
  },
};

export const WithIcon: Story = {
  args: {
    size: 'md',
    variant: 'outlined',
  },
  render: ({ children, ...args }) => {
    return (
      <Button {...args}>
        <IoMdMicOff />
        {children}
      </Button>
    );
  },
};
