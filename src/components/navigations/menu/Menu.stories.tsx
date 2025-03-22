import { Meta, StoryObj } from '@storybook/react/*';
import Menu from './Menu';
import { CgArrowTopRight } from 'react-icons/cg';

const meta = {
  title: 'Components/Navigations/Menu',
  component: Menu,
  args: {
    controlLabel: 'Language',
    optionActive: 'english',
    options: [
      {
        id: 'english',
        label: 'Inglés',
      },
      {
        id: 'spanish',
        label: (
          <>
            Español <CgArrowTopRight />
          </>
        ),
      },
    ],
  },
  argTypes: {},
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
