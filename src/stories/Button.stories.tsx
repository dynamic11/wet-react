// Button.stories.ts|tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../components";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Test/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    children: { defaultValue: "Button" },
  },
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { variant: "primary", children: "Button" };

export const Secondary = Template.bind({});
Secondary.args = { variant: "secondary" };

export const Link = Template.bind({});
Link.args = { variant: "link" };
