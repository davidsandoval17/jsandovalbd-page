import { Meta, StoryObj } from '@storybook/react/*';
import SwitchTheme from './SwitchTheme';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Inputs/SwitchTheme',
  component: SwitchTheme,
  args: {
    active: false,
    onClick: fn(),
    m: 0,
  },
  argTypes: {
    active: {
      description: 'Indica cuando está activo la versión `dark` del tema',
    },
    onClick: {
      description: 'Función para cambiar el tema',
    },
    m: {
      options: ['0', '1', '2', '3', '4'],
      control: {
        type: 'select',
      },
    },
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SwitchTheme>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
