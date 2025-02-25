import { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Button } from '../Button';
import TrashBinIcon from '../../../icons/actions/TrashBinIcon';
import { onDarkBackground } from '../../../docs/parameters';

const meta: Meta = {
    title: 'Components/Button/Button',
    component: Button,
    args: {
        children: 'Button title'
    },
    argTypes: {
        children: {
            description: 'Button caption'
        },
        variant: {
            control: 'radio',
            options: ['primary', 'secondary', 'danger']
        },
        size: {
            control: 'radio',
            options: ['small', 'medium']
        },
        as: {
            description: 'html tag to use',
            control: 'text',
            table: {
                defaultValue: {
                    summary: 'button'
                }
            }
        },
        ref: {
            table: {
                disable: true
            }
        },
        theme: {
            table: {
                disable: true
            }
        },
        forwardedAs: {
            table: {
                disable: true
            }
        }
    }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Secondary: Story = {
    args: {
        variant: 'secondary'
    }
};

export const Danger: Story = {
    args: {
        variant: 'danger'
    }
};

export const Disabled: Story = {
    args: {
        disabled: true
    }
};

export const Small: Story = {
    args: {
        size: 'small'
    }
};

export const Inverted: Story = {
    args: {
        inverted: true
    },
    parameters: {
        ...onDarkBackground
    }
};

export const WithIcon: Story = {
    args: {
        children: (
            <>
                <TrashBinIcon size={20} /> Remove
            </>
        ),
        variant: 'danger'
    }
};
