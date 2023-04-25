import { Input } from './Input';

export default {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export const Disabled = {
  args: {
    disabled: true
  },
};
