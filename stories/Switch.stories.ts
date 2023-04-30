import { Switch } from './Switch';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
    title: 'Example/Switch',
    component: Switch,
    tags: ['autodocs'],
    argTypes: {
        value: { type: 'boolean', default: false },
        label: { type: 'string', default: "Keep your settings" },
        disabled: { type: 'boolean', default: false },
        readOnly: { type: 'boolean', default: false },
    },
};

export const Default = {
    args: {
        label: "Keep your settings",
        value: false,
        readOnly: false,
        disabled: false
    },
};

export const Disabled = {
    args: {
        label: "Keep your settings",
        value: false,
        readOnly: false,
        disabled: true
    },
};

export const ReadOnly = {
    args: {
        label: "Keep your settings",
        value: false,
        readOnly: true,
        disabled: false
    },
};