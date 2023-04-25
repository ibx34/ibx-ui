import { Header } from "./Header";

export default {
    title: 'Example/Header',
    component: Header,
    tags: ['autodocs'],
    argTypes: {
        text: { type: 'string', required: true, default: "Header" },
        size: {
            control: { type: 'select', default: '200', require: true, },
            options: [
              '100',
              '200',
              '300',
              '400'
            ]
        },
    },
};

export const Default = {
    args: {
        text: "Small",
        size: 100
    },
};
export const Medium = {
    args: {
        text: "Medium",
        size: 200
    },
};
export const Large = {
    args: {
        text: "Large",
        size: 300
    },
};
export const Larger = {
    args: {
        text: "Larger",
        size: 400
    },
};