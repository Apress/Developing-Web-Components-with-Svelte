<script>
  // @ts-nocheck
  import Slider from './Slider.svelte';
  import SliderDocs from './SliderDocs.mdx';
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Meta 
  title="Cobalt UI Library/Basic Components/Slider"
  component={Slider}
  parameters={{page: null}}
/>

<Template let:args>
  <Slider {...args} />
</Template>

<Story name="Default" 
  args={{ 
    val: 1, 
    min: 0,
    max: 100,
    step: 10  
  }}
  parameters={{
    docs: {
      page: SliderDocs
    },
  }}
/>

<Story name="Disabled" 
  args={{ 
    val: 1, 
    min: 0,
    max: 100,
    step: 10,
    disabled: true  
  }}
  parameters={{
    docs: {
      page: SliderDocs
    },
  }}
/>
