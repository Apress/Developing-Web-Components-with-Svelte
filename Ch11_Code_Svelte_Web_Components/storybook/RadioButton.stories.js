import RadioButton from "../RadioButton/RadioButton.svelte";
import { action } from "@storybook/addon-actions";

const actionsData = {
  click: action("click"),
  blur: action("blur"),
  change: action("change"),
  input: action("input"),
  focus: action("focus"),
};

const reusableOptions = [
  {
    name: "frequency",
    value: "daily",
    label: "Daily",
  },
  {
    name: "frequency",
    value: "weekly",
    label: "Weekly",
  },
  {
    name: "frequency",
    value: "monthly",
    label: "Monthly",
  },
];

export default {
  title: "Cobalt UI Library/New Components/RadioButton",
  component: RadioButton,
};

const Template = ({ ...args }) => ({
  Component: RadioButton,
  props: args,
  on: {
    ...actionsData,
  },
});

export const Default = Template.bind({});
Default.args = {
  id: "r1",
  type: "radio",
  options: reusableOptions,
  legendLabel: "Radio legend",
};
