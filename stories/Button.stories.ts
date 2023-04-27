import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    subtle: { type: 'boolean', default: false },
    disabled: { type: 'boolean', default: false },
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
    subtle: false,
    style: 'primary',
    label: 'Button',
    disabled: false
  },
};

export const DisabledPrimary = {
  args: {
    subtle: false,
    style: 'primary',
    label: 'Button',
    disabled: true
  },
};

export const Warning = {
  args: {
    subtle: false,
    style: 'warning',
    label: 'Button',
    disabled: false
  },
};

export const Danger = {
  args: {
    subtle: false,
    style: 'danger',
    label: 'Button',
    disabled: false
  },
};

export const Default = {
  args: {
    subtle: true,
    style: 'secondary',
    label: 'Button',
    disabled: false
  },
};