<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import RadioButton from "./RadioButton.svelte";
  let radioValue;
  const options = [{
    value: 'Armstrong-Siddeley',
    label: 'Armstrong-Siddeley',
  }, {
    value: 'Jaguar Mark II',
    label: 'Jaguar Mark II',
  }, {
    value: 'Ford Zephyr',
    label: 'Ford Zephyr',
  }]
</script>
  
<Meta
  title="Cobalt UI Library/Basic Components/RadioButton"
  component={RadioButton}
  parameters={{page: null}}  
/>

<Template let:args>
  <RadioButton {options} bind:userSelected={radioValue} />
  <p>Selected car: {radioValue}</p>
</Template>
  
<Story
  name="Default"
/>

  