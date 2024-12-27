import React from 'react';
import AspectRatio from '../AspectRatio';
import SandboxEditor from '~/components/tools/SandboxEditor/SandboxEditor';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof AspectRatio> = {
    title: 'Components/AspectRatio',
    component: AspectRatio,
    render: (args) =>
        <SandboxEditor>
            <AspectRatio {...args} >
                <img
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    className="Image"
                    src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg"
                    alt="Landscape photograph"
                />
            </AspectRatio>
        </SandboxEditor>
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
    args: {
        className: '',
        ratio: '16/9'
    }
};
