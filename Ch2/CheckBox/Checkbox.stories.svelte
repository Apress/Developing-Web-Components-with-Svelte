<script>
  // @ts-nocheck
  import Checkbox from "./Checkbox.svelte";
  import CheckboxDocs from "./CheckboxDocs.mdx";
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Meta 
  title="Cobalt UI Library/Basic Components/Checkbox"
  component={Checkbox}
  parameters={{page: null}}
/>

<Template let:args>
  <Checkbox {...args} />
</Template>

<Story name="Default" 
  args={{ 
    checked: true,
    onClick: () => alert('this is a text field')
  }}
  parameters={{
    docs: {
      page: CheckboxDocs
    },
  }}
/>

<Story name="NoLabel" 
  args={{ 
    label: '',
    checked: true,
    onClick: () => alert('this is a text field')
  }}
  parameters={{
    docs: {
      page: CheckboxDocs
    },
  }}
/>

<Story name="Disabled" 
  args={{ 
    checked: true,
    disabled: true
  }}
  parameters={{
    docs: {
      page: CheckboxDocs
    },
  }}
/>
