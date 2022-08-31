import { ComponentStory } from '@storybook/react';
import Button from '.';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <div className="gap-y-2 flex flex-col items-start">
      <Button {...args} />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button CTA',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button CTA',
  variant: 'secondary',
};
