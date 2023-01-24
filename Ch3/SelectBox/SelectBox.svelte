<svelte:options tag="cobalt-selectbox" />

<script>
  import selectOptionsData from "./selectboxdata.json";

  export let selectOptions = selectOptionsData;
  export let displayText = (a) => a.text;
  export let index = 0;
  export let disabled = false;

  function onChange(event) {
    event.target.dispatchEvent(new CustomEvent("onchange", { composed: true }));
  }
</script>

<div class="cobalt">
  <select bind:value={index} {disabled} on:change={onChange}>
    {#each selectOptions as option, i}
      <option value={i + 1}>{displayText(option)}</option>
    {/each}
  </select>
</div>

<style>
  .cobalt {
    display: flex;
  }

  select {
    padding: 5px 100px 5px 5px; /* 100px required to make sure image displays */
    font-size: 16px;
    border: 1px solid #19247c;
    height: 34px;
    border-radius: 10px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url("./icon.png") 96% / 15% no-repeat #9393ff;
  }
</style>
