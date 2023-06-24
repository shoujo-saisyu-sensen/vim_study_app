import React from "react";
import { Story, Meta } from "@storybook/react";
import { index } from @/components/pages/test;

export default {
  title: "index",
  component: index,
  argTypes: {},
} as Meta;

export const Default: Story = () => <index /></index>;