import { Switch } from './Switch';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
    title: 'Example/Switch',
    component: Switch,
    tags: ['autodocs'],
    argTypes: {
        value: { type: 'boolean', default: false },
        label: { type: 'string', default: "Keep your settings" },
        left: { type: 'string', default: "On" },
        right: { type: 'string', default: "Off" },
    },
};

export const Default = {
    args: {
        label: "Keep your settings",
        value: false,
        left: "On",
        right: "Off"
    },
};