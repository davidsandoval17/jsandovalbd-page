import { Meta, StoryObj } from '@storybook/react/*';
import Header from './Header';

const meta = {
  title: 'Components/Surfaces/Header',
  component: Header,
  args: {},
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
