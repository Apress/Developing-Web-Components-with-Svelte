<script>
  import './slider.css';
  export let id;
  export let min = 0;
  export let max = 100;
  export let step = 1;
  export let val = 50;
  export let disabled = false;
</script>

<div class="cobalt">
  <input
    type="range"
    id="{id}" {min} {max} {step}
    name="{id}"
    bind:value={val}
    disabled = {disabled}
  />
  <label for="{id}">{val}</label>
</div>