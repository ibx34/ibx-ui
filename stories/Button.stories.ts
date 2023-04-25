import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    style: {
      control: { type: 'select', default: 'secondary', require: true, },
      options: [
        'primary',
        'secondary',
        'danger',
        'warning'
      ]
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    style: 'primary',
    label: 'Button',
  },
};

export const Warning = {
  args: {
    style: 'warning',
    label: 'Button',
  },
};

export const Danger = {
  args: {
    style: 'danger',
    label: 'Button',
  },
};

export const Default = {
  args: {
    style: 'secondary',
    label: 'Button',
  },
};