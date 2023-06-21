---
to: stories/<%= path %>/<%= name %>.stories.tsx
unless_exists: true
---
import React from "react";
import { Story, Meta } from "@storybook/react";
import { <%= name %> } from <%= aliasPath %>;

export default {
  title: "<%= name %>",
  component: <%= name %>,
  argTypes: {},
} as Meta;

export const Default: Story = () => <<%= name %> /></<%= name %>>;