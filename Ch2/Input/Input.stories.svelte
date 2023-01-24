<script>
  // @ts-nocheck
  import Input from "./Input.svelte";
  import InputDocs from "./InputDocs.mdx";
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Meta 
  title = "Cobalt UI Library/Basic Components/Input" 
  component={Input}
  parameters={{page: null}}
/>

<Template let:args>
  <Input {...args} />
</Template>

<Story name="Default" 
  args={{ 
    placeholder: 'example text', 
    label: 'Text:',
    onInput: () => alert('this is a text field') 
  }}
  parameters={{
    docs: {
      page: InputDocs
    },
  }}
/>

<Story name="Email" 
  args={{ 
    placeholder: 'email@example.com', 
    label: 'Email:',
    fieldType: 'email',
    onInput: () => alert('this is an email field')
  }}
  parameters={{
    docs: {
      page: InputDocs
    },
  }}
/>

<Story name="No Label" 
  args={{ 
    placeholder: 'no label',
    label: '',
    fieldType: 'text',
    onInput: () => alert('this is an field with no label')
  }}
  parameters={{
    docs: {
      page: InputDocs
    },
  }}
/>

<Story name="Disabled" 
  args={{ 
    placeholder: 'disabled field',
    label: 'Text',
    fieldType: 'text',
    disabled: true
  }}
  parameters={{
    docs: {
      page: InputDocs
    },
  }}
/>