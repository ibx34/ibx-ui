import { Billboard } from './Billboard';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
    title: 'Example/Billboard',
    component: Billboard,
    tags: ['autodocs'],
    argTypes: {
        disabled: { type: 'boolean', default: false },
        label: { type: 'string', default: 'Primary Billboard' }
    },
};