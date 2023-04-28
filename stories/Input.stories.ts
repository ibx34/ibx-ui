import { Input } from './Input';

export default {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    readOnly: false,
    disabled: false
  },
};

export const Disabled = {
  args: {
    disabled: true
  },
};

export const ReadOnly = {
  args: {
    readOnly: true
  },
};
